import React,{useEffect} from 'react';

import 'react-toastify/dist/ReactToastify.css';
import Theme from '../src/ui/Theme';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import withData from '../src/configureClient';

import "./styles.scss"

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