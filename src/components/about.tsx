import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MainPhoto from './MainPhoto'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
///

import ScrollAnimation from 'react-animate-on-scroll';


const useStyles = makeStyles(theme => ({
  mainContainer:{
    width:"100%",
    [theme.breakpoints.down("sm")]: {
      margin:0,
      padding:0
     }
  },


boxContainer:{
  backgroundColor:"#fff",
  padding:"2em",
  marginRight:"1em",
  // boxShadow:`-7px 7px 22px -6px rgba(0,0,0,0.76)`,
  boxShadow:`0 15px 20px -15px rgba(0, 0, 0, 0.3), 0 55px 50px -35px rgba(0, 0, 0, 0.3)`,
  [theme.breakpoints.down("xs")]: {
  margin:0,
  padding:0,
  boxShadow:"none"
  }
},
boxContainer2:{
  backgroundColor:"#fff",
  padding:"2em",
   //boxShadow:`-7px 7px 22px -6px rgba(0,0,0,0.76)`,
boxShadow:`0 15px 20px -15px rgba(0, 0, 0, 0.3), 0 55px 50px -35px rgba(0, 0, 0, 0.3)`,
   //web
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
    height:"45em",
    marginTop:"34em",
    }
  },
  galleryContainer:{
    width:"78%",
    marginRight:"12%",
    marginLeft:"10%",
    marginBottom:"1em",
    // marginTop:"2.5rem",
    boxShadow: `0 15px 20px -15px rgba(0, 0, 0, 0.3), 0 55px 50px -35px rgba(0, 0, 0, 0.3)`,
    [theme.breakpoints.down("md")]: {
      width:"80%",
      marginRight:"5em",
      marginLeft:"10em"
      },
      [theme.breakpoints.down("sm")]: {
        width:"100%",
        marginRight:0,
        marginLeft:0
        },
    [theme.breakpoints.down("xs")]: {
    margin:0,
    width:"100%",
    maxWidth: "31rem",
    boxShadow:"none"
    }
  },
  infoContainer:{
    backgroundColor:"#fff",
    height:"100%",
    minHeight:"25em",
    boxShadow: `0 15px 20px -15px rgba(0, 0, 0, 0.3), 0 55px 50px -35px rgba(0, 0, 0, 0.3)`,
    marginTop:"6.5em",
    minWidth: "16em",
    marginRight:"10em",
    marginLeft:"14em",
    [theme.breakpoints.down("lg")]: {
      marginTop:"5.5em",
      height:"100%",
      minHeight:"26em",
      marginRight:"10.5em",
      marginLeft:"13.5em",
     
      },
    [theme.breakpoints.down("md")]: {
      marginTop:"4em",
      width:"80%",
      marginRight:"5em",
      marginLeft:"10em"
      },
      [theme.breakpoints.down("sm")]: {
        marginTop:"2em",
        width:"100%",
        marginRight:0,
        marginLeft:0
        },
    [theme.breakpoints.down("xs")]: {
      margin:0,
      padding:0,
      maxWidth: "31rem",
      width:"100%",
      boxShadow:"none"
    },
   
  },
 

}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  return (


 <Grid container className={classes.mainContainer} direction="column">




<ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
<Grid item>
<Grid container className={classes.secondContainer}justify="space-around" 
alignItems="flex-start" direction="column">


<Grid sm item className={classes.infoContainer}>
<Typography align="center" style={{color:"black",marginTop:"2rem",
marginRight:matchesXS ? 0:"1rem"
,marginLeft:matchesXS ? 0:"1rem",fontFamily: `Playfair Display, serif`,
fontSize: "1.35rem" }}>
 エクセルニュージーランドは
</Typography>
<Typography align="center" style={{marginTop:".5rem",
marginRight:matchesXS ? 0:"1rem"
,marginLeft:matchesXS ? 0:"1rem"}}>
  <span style={{backgroundColor:"#e33509", color:"#fff",fontFamily: `Playfair Display, serif`,
      fontSize: "2.2rem",marginLeft:"0.5rem"}}>キミのホンキを本気で応援します！</span> 
    </Typography>
      
{/* <Typography variant="h6" align="center">
留学を成功に導く経験豊富なサポートと、自立と自信を育てる親身な関わりで、
留学生のホンキを本気で応援します！
    </Typography> */}
    
<Typography variant="h6"style={{marginTop:'40px',marginBottom:'4em'
,marginLeft:"2em",marginRight:"2em"}}>
自然豊かな美しい国ニュージーランドの中でも、特にのどかで且つ近代的な街クライストチャーチで
留学を成功に導く経験豊富なサポートと自立と自信を育てる親身な関わりで、
留学生のホンキを本気で応援します！

ニュージーランド、クライストチャーチでの、中学、高校、大学、語学学校、専門学校留学を、成功に導く
経験豊富な留学サポート、そして
入学手続きから、渡航準備、到着後のオリエンテーション、学校生活、ホームステイの留学全般
最初から最後まで安心にサポートいたします。
ご気軽にご相談ください。
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



