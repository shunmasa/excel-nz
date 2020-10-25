import React,{useEffect} from 'react';

import 'react-toastify/dist/ReactToastify.css';
import Theme from '../src/ui/Theme';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider,useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import withData from '../src/configureClient';

import "./styles.scss"


function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

function MyComponent() {
  const width = useWidth();
  return <span>{`width: ${width}`}</span>;
}

const App = (props:any):JSX.Element => {


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
 <ThemeProvider theme={Theme}>
   <MyComponent />
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
      </React.Fragment>
    );
  }

export default App;