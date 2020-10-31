import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import Theme from '../src/ui/Theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={Theme.palette.primary.main} />
        
           <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Raleway:100,400,400i,700|Roboto:300,400,500,700&display=swap"
          />
          <script src="https://www.google.com/recaptcha/api.js" async defer></script>
              <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/grids-responsive-min.css"></link>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        </Head>
        <body style={{backgroundColor:"#fff"}}>

          <Main/>
   
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {

  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };

};
