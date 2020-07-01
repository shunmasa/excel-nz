import React from 'react';
// import Login from '../src/components/Login';
// import Footer from '../src/components/Footer';
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
});

const Home: React.SFC = () => {
  // const classes = useStyles();
  return (
    <div className='mainContainer'>
      <div className='container'>
        <h1 className='heading'>404エラー 　リクエストしたリンクはありません</h1>
        {/* <Login /> */}
      </div>
      {/* <Footer /> */}
      <style jsx>
        {`
          .mainContainer {
            height: 100%;
            min-height: 100vh;
            width: 100%;
          }
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: row wrap;
            padding: 8rem 0rem !important;
          }
          .heading {
            color: white;
            text-align: center;
            font-size: 3rem;
            padding: 2rem;
          }
          @media only screen and (max-width: 740px) {
            .container {
              padding: 3rem 0rem !important;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
        
          body {
            margin: 0;
            padding: 0;
            height: 100%;
            min-height: 100vh;
            font-family: Candara;
            background: #355c7d;
            background: -webkit-linear-gradient(
              to right,
              #c06c84,
              #6c5b7b,
              #355c7d
            );
            background: linear-gradient(to right, #c06c84, #6c5b7b, #355c7d);
          }
        `}
      </style>
    </div>
  );
};
export default Home;
