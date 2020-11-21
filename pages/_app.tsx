import React,{useEffect} from 'react';
import Router from "next/router";
import 'react-toastify/dist/ReactToastify.css';
import Theme from '../src/ui/Theme';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


import "./styles.scss"

const App = (props:any):JSX.Element => {


  //
  useEffect(() => {
   
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }


    
  }, []);


  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

    const { Component, pageProps} = props;
    return (
      <React.Fragment>
       {loading ? (
        <h1>Loading...</h1>
      ) :(
        
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
  </ThemeProvider>)}
 

      </React.Fragment>
    );
  }

export default App;