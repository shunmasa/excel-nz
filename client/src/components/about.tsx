import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MainPhoto from '../../src/components/MainPhoto'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import ScrollAnimation from 'react-animate-on-scroll';


const useStyles = makeStyles(theme => ({
  mainContainer:{
    width:"100%",
    [theme.breakpoints.down("sm")]: {
      margin:0,
      padding:0
     }
  },
  rowContainer: {
    marginTop:"1em",
    paddingLeft: "8.2em",
    paddingRight: "8.2em",

    [theme.breakpoints.down("sm")]: {
     margin:0,
     padding:0
    }
  },
  rowInnerContainer:{
    height:"30em"
  },
boxContainer:{
  backgroundColor:"#fff",
  padding:"2em",
  marginRight:"1em",
  boxShadow:`-7px 7px 22px -6px rgba(0,0,0,0.76)`,
 
  [theme.breakpoints.down("xs")]: {
  margin:0,
  padding:0,
  boxShadow:"none"
  }
},
boxContainer2:{
  backgroundColor:"#fff",
  padding:"2em",
  boxShadow:`-7px 7px 22px -6px rgba(0,0,0,0.76)`,

   
  [theme.breakpoints.down("xs")]: {
    margin:0,
    padding:0,
    boxShadow:"none"
    }
},
  secondContainer:{
    height:"30em",
    [theme.breakpoints.down("md")]: {
      marginTop:"3em",
      height:"35em" 
      },
    [theme.breakpoints.down("xs")]: {
    height:"45em" 
    }
  },
  galleryContainer:{
    width:"85%",
    marginRight:"9%",
    marginLeft:"7%",
    marginTop:"2.5rem",
    boxShadow: `-8px 5px 25px 1px rgba(50, 50, 50, 0.75)`,

    [theme.breakpoints.down("xs")]: {
    margin:0,
    width:"100%",
    boxShadow:"none"
    }
  },
  infoContainer:{
    backgroundColor:"#fff",
    boxShadow: `-8px 3px 25px 1px rgba(50, 50, 50, 0.75)`,
    marginTop:"15em",
    minWidth: "25em",
    marginRight:"6em",
    marginLeft:"10em",
    paddinBottom: "2em",
    [theme.breakpoints.down("xs")]: {
      margin:0,
      padding:0,
      maxWidth: "40rem",
      width:"100%",
      boxShadow:"none"
    }
  },
 

}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (

 <Grid container className={classes.mainContainer}direction="column">



<ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
<Grid item>
<Grid container className={classes.secondContainer}justify="space-around" 
alignItems="flex-start" direction="column">


<Grid sm item className={classes.infoContainer}>

<Typography variant="h3" align="center" style={{marginTop:"1rem",marginRight:matchesXS ? 0:"1rem"
,marginLeft:matchesXS ? 0:"1rem"}}>
     <img src="/assets/alert.svg" style={{width:"45px",height:"45px",marginRight:"10px"}}></img>なぜ当社を選ぶのか？
    </Typography>
      
<Typography variant="h6" align="center">
留学を成功に導く経験豊富なサポートと、自立と自信を育てる親身な関わりで、
留学生のホンキを本気で応援します！
    </Typography>
    
<Typography variant="h6" align="center"style={{marginTop:'30px',marginBottom:'3em',marginLeft:".5em",marginRight:".5em"}}>
自然豊かな美しい国ニュージーランドの中でも、特にのどかで且つ近代的な街クライストチャーチで
留学を成功に導く経験豊富なサポートと、自立と自信を育てる親身な関わりで、
留学生のホンキを本気で応援します！

自然豊かな美しい国ニュージーランドの中でも、特にのどかで且つ近代的な街クライストチャーチで
留学を成功に導く経験豊富なサポートと、自立と自信を育てる親身な関わりで、
留学生のホンキを本気で応援します！
    </Typography>
    
 </Grid>



</Grid> 

  
</Grid>
</ScrollAnimation>

<Grid item>
{/* <div className="talk-bubble tri-right border btm-right-in">
  <div className="talktext">
    <p>Now flipped the other way and square. Uses .border and .btm-right-in</p>
  </div>
</div> */}
<ScrollAnimation animateIn='bounceInLeft'
  animateOut='bounceOutRight'delay={400}>
  <Grid item container className={classes.galleryContainer}>
 
    <MainPhoto/>
   
    </Grid>
    </ScrollAnimation>
  </Grid>




    </Grid>
  );
}



