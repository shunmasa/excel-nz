import React from "react";
// import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
// import { NextPage } from 'next';
import Link from 'next/link';
const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#1546d6",
        // backgroundColor:"#4b89dc",
        width: "100%",
        position: "relative",
        height: "15em"
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    linkStyle: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none",
        "&:visited": {
            color: "#fff"
        }
    },
    gridItem: {
        margin: "4em"
    },
    icon: {
        height: "3em",
        width: "3em",
        [theme.breakpoints.down("xs")]: {
            height: "2em",
            width: "2em"
        }
    },
    socialContainer: {
        marginTop: "1em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em"
        }
    }
}));
// interface IProps {
//   setValue:(value:number)=>void;
//   setSelectedNum:(selectedNum:number)=>void;
// }
//  const Footer:NextPage<IProps>= (props)=>{
const Footer = () => {
    const classes = useStyles();
    //   const [date , setDate] = useState();
    //  const getYear = () =>  setDate(new Date().getFullYear())
    //  useEffect(() => {
    //   getYear();
    // }, [])
    return (<footer className={classes.footer}>
  
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} style={{ margin: 0 }}>
              <Grid item 
    // onClick={() => props.setValue(0)}
    // href="/"
    className={classes.linkStyle}>
                <Link href="/home">
               <a style={{ color: "#fff" }}>ホーム</a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} style={{ margin: 0 }}>
              <Grid item 
    // onClick={() => props.setValue(0)}
    // href="/"
    className={classes.link}>
                <Link href="/login">
                <a style={{ color: "#fff" }}>ご担当者様</a>
                </Link>
               
              </Grid>
            </Grid>
          </Grid>
          
         

          <Grid item className={classes.gridItem}>
            <Grid item container direction="column" spacing={2} style={{ margin: 0 }} 
    // component={Link}
    // href="/contact"
    className={classes.link}>
              <Grid item>
                  <Link href="/contact">
                <a style={{ color: "#fff" }}>お問い合わせ</a>
                </Link>
              </Grid>

              <Grid item>
               nzsuport@gmail.com
              </Grid>
              <Grid item>
               (+64)999-999-99
              </Grid>
            </Grid>
          </Grid>


          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} style={{ margin: 0 }}>

              <Grid item className={classes.link}>
                SNSリンク
              </Grid>


              <Grid container spacing={2} className={classes.link}>
        <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img alt="facebook logo" src="/assets/facebook.svg" className={classes.icon}/>
        </Grid>
        <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <img alt="twitter logo" src="/assets/twitter.svg" className={classes.icon}/>
        </Grid>

        <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <img alt="instagram logo" src="/assets/instagram.svg" className={classes.icon}/>
        </Grid>
      </Grid>



            </Grid>
          </Grid>




        </Grid>



 

      </Hidden>

  
     
    </footer>);
};
export default Footer;
