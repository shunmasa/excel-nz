import React,{useEffect} from 'react';
import NextApp from "next/app";
import 'react-toastify/dist/ReactToastify.css';
import Theme from '../src/ui/Theme';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import parser from "ua-parser-js";
// import withData from '../src/configureClient';
import mediaQuery from "css-mediaquery";

import "./styles.scss"

const App = (props:any):JSX.Element => {

  const mobileSsrMatchMedia = query => ({
    matches: mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      width: "0px"
    })
  });
  const desktopSsrMatchMedia = query => ({
    matches: mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      width: "1024px"
    })
  });
  
  const mobileMuiTheme = createMuiTheme({
    props: {
      // Change the default options of useMediaQuery
      MuiUseMediaQuery: { ssrMatchMedia: mobileSsrMatchMedia }
    }
  });
  const desktopMuiTheme = createMuiTheme({
    props: {
      // Change the default options of useMediaQuery
      MuiUseMediaQuery: { ssrMatchMedia: desktopSsrMatchMedia }
    }
  });

  const getInitialProps = async(ctx) => {
    // I'm guessing on this line based on your _document.js example
    const initialProps = await NextApp.getInitialProps(ctx);
    // OP's edit: The ctx that we really want is inside the function parameter "ctx"
    const deviceType =
      parser(ctx.req.headers["user-agent"]).device.type || "desktop";
    // I'm guessing on the pageProps key here based on a couple examples
    return { pageProps: { ...initialProps, deviceType } };
  }
  //
  useEffect(() => {
   
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }


    
  }, []);


//
    const { Component, pageProps} = props;
    return (
      <React.Fragment>
         <MuiThemeProvider
        theme={
          pageProps.deviceType === "mobile" ? mobileMuiTheme : desktopMuiTheme
        }
      >
 <ThemeProvider theme={Theme}>
       <CssBaseline />
        <Component {...pageProps} />
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
 </ThemeProvider>
 </MuiThemeProvider>
      </React.Fragment>
    );
  }

export default App;