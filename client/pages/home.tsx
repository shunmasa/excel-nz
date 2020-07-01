import ScrollNavigation from 'react-single-page-navigation';
import ReactGA from "react-ga";
import Head from "next/head";
import React,{useState,useEffect,useCallback, useRef} from 'react';
import { debounce } from "lodash";
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Carousel from '../src/components/Carousel'
import Cards from '../src/components/Cards'
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography, useScrollTrigger, Button, Paper } from '@material-ui/core';
import StepperFnc from '../src/components/StepperFnc'
import Lottie from "react-lottie";
import PlaneData from '../public/assets/plane.json'
import CallAnimation from '../src/components/CallAnimation'
import TextLoop from "react-text-loop";
import Footer from '../src/components/Footer'
import GET_POSTS from '../src/graphql/query/posts';
import Link from 'next/link'
import moment from 'moment'
import useSticky from "../src/components/UseStickey"
// import ListPost from '../src/components/ListPost'

import { withApollo } from '../lib/withApolloData'
import { useQuery } from '@apollo/react-hooks';
import About from '../src/components/about'
import Hidden from "@material-ui/core/Hidden";

import GET_NOTICES from '../src/graphql/query/notices'
import ButtonArrow from "../src/components/ButtonArrow";
import ScrollAnimation from 'react-animate-on-scroll';
// import MainPhoto from '../src/components/MainPhoto'
function ElevationScroll(props:any) {

  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     marginTop:'7em'
    },   
    animation: {
      maxWidth: "30em",
      minWidth: "16em",
      marginTop: "2em",
      marginRight:"5em",
      marginBottom:"5em",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "25em",
        margin:0
      }
    },
   mainContainer:{
     width:"100%"
   },
    secondContainer:{
      height:"20em",
      [theme.breakpoints.down("md")]: {
        marginTop:"3em",
        height:"25em" 
        },
      [theme.breakpoints.down("xs")]: {
       marginTop:"4em",
      height:"45em" 
      }
    },
  
    thirdContainer:{
      marginTop:"5em",
      height:"20em",
      weidth:"20em",
      [theme.breakpoints.down("md")]: {
        height:"25em",
        weidth:"100%",
        },
      [theme.breakpoints.down("xs")]: {
      height:"28em",
      weidth:"100%",
      }
    },  
    rowContainer: {
      // marginTop:"1.5em",
      paddingLeft: "8.2em",
      paddingRight: "8.2em",
      [theme.breakpoints.down("sm")]: {
     padding:0,
     marign:0
      }
    },
 
  boxContainer:{
    backgroundColor:"#fff",
    padding:"2em",
    marginRight:"1em",
    boxShadow:`-7px 7px 22px -6px rgba(0,0,0,0.76)`,
    [theme.breakpoints.down("md")]: {
      marginBottom:".5em",
      },
    [theme.breakpoints.down("xs")]: {
    margin:0,
    boxShadow:"none"
    }
  },
  boxContainer2:{
    backgroundColor:"#fff",
    padding:"2em",
    boxShadow:`-7px 7px 22px -6px rgba(0,0,0,0.76)`,
    [theme.breakpoints.down("md")]: {
      marginBottom:".5em",
      },
    [theme.breakpoints.down("xs")]: {
      margin:0,
      boxShadow:"none"
    }
  },
    checkContainer:{
        maxWidth:"100%",
        marginLeft:"8em",
        marginRight:"8em",
        [theme.breakpoints.down("xs")]: {
         marginLeft:"2rem",
         marginRight:0,
         marginBottom:"3rem"
        }
       
    },
    titleText:{
      fontSize:"2rem",
      marginLeft:"1.4em",
      marginBottom:"2em",
      [theme.breakpoints.down("xs")]: {
        margin:0,
        fontSize:"1.5rem"
      }
    },

    checkboard:{
      height:"15em",
      marginLeft:"3em",
      width:"5rem",
     
  
    },
  
    learnButton: {
// -webkit-box-shadow: -4px 6px 5px 0px rgba(0,0,0,0.75);
// -moz-box-shadow: -4px 6px 5px 0px rgba(0,0,0,0.75);
     marginTop:"1em",
      // boxShadow: "-2px 3px 1px 2px",
      borderColor:"#0B72B9",
      borderWidth: 3,
      textTransform: "none",
      color: "#0B72B9",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "1.5rem",
      height: 90,
      padding: 8,
      [theme.breakpoints.down("md")]: {
        marginBottom: "2em"
      }
    },
    desContainer:{
      height:"33rem",
      marginBottom:"6em",
      marginTop:"1em",
      [theme.breakpoints.down("md")]: {
        height:"40rem" 
        },
      [theme.breakpoints.down("xs")]: {
      height:"45rem" 
      }

      }
    ,
   textContainer: {
      minWidth: "30em",
      marginRight:"15em",
    
      
      [theme.breakpoints.down("xs")]: {
        margin:"3em 3em 0 3em",
        minWidth: "10rem",
       
      }
    },
    photoContainer: {
      height:"70rem",
      paddingLeft: "5em",
      paddingRight: "5em",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em"
      },
    },
 
    bannerContainer:{
      height:"10rem",
      [theme.breakpoints.down("xs")]: {
       height:"8rem"
        
        }
    },
     primaryContainer:{
      height:"110rem",
      margin:0,
      [theme.breakpoints.down("md")]: {
        height:"150em",
        weidth:"100%",
        },
      [theme.breakpoints.down("xs")]: {
      height:"305em",
      weidth:"100%",

        margin:0,
        padding:0
      
      }
    },

    flowContainer:{
      // position:"relative",
      width:"100%",
      height:"25em",
      marginBottom:"5em",
      marginTop:"5em",
      [theme.breakpoints.down("xs")]: {
        height:"60em",
        marginTop:"1em",
        marginBottom:0,
      
        
        }
     
    },
    flow:{
      marginLeft:"8em",
      width:"60%",
      [theme.breakpoints.down("xs")]: {
        width:"100%",
        margin:0
        
        }
    },
  
    imageContainer:{
       marginRight:"5em",
       [theme.breakpoints.down("xs")]: {
        marginLeft:"3em",
        
        }
      
    },
    svg:{


backgroundColor: "#00b7ff",
backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E")`


},
underline:{
    padding:0, 
    backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 0.3em",
    backgroundPosition: "0 88%",
    transition: "background-size 0.25s ease-in",
    '&:hover':{
      backgroundSize: "100% 88%"
    }
  },
  })
); 


interface Post {
  username: string;
  description: string;
  _id: string;
}

interface Data {
  posts: [Post];
}

interface PostProps {
  loading: boolean;
  data: Data;
  error: string;
}


const Home = (props) => {
  
const {data,error,loading} = useQuery(GET_POSTS)
// console.log('pdata',data)
const {data:dataN,loading:loadingN,error:errorN} = useQuery(GET_NOTICES)
  let message = 'Posts';
  const classes = useStyles();
  if (loadingN) message = 'Loading...';
  if (errorN) message = `Error! ${errorN}`;
  if (dataN && dataN.notices.length <= 0) message = 'No Posts';

 console.log('pdata',data)
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultHeaderClassName = "calsses.main_h";
  const [headerClassName, setHeaderClassName] = useState(
    defaultHeaderClassName
  );
const [color,setColor] = useState(['red','blue','yellow','#00ff00']);
const [randomColor,setRandomColor] = useState("");
const [visibleSection, setVisibleSection] = useState('');

const [isOpened, setIsOpened] = React.useState(false);
const [status, setStatus] = useState('close');


  


    useEffect(() => {
    setHeaderClassName(
      `${isOpened ? "open-nav" : ""}`
    );

   
  }, [isOpened]);

  useEffect(() => {
    getColor()
  },[]);

const getColor = () => {
  const colorItem = color[Math.floor(Math.random()*color.length)]
 setRandomColor(colorItem);
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData:PlaneData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


const shuffle = (a:string[])=> {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const words = [
  "親身に",
  // "信頼のコミュニケーション",
  // "留学生をサポート",
  "いつでも",
  "きめ細やかに",

];

const { isSticky, element } = useSticky()

return (
 <>

<ElevationScroll>
{/* 
<Head>
        <title key="title">ホーム</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Contact Us"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="excel/home" />
        <link
          rel="canonical"
          key="canonical"
          href="https://excel/home.js"
        />
      </Head> */}

  <ScrollNavigation elements={{ EL1: {}, EL2: {} ,EL3:{},EL4:{},EL5:{},EL6:{},EL7:{},EL8:{}}}>

{({ refs,goTo }) => (
<Grid container direction="column" className={classes.mainContainer}>
  <header className={`${headerClassName} ${isSticky ? "navbar navbar-sticky" : "navbar"}`} ref={element}>

    <div className="row" >
      <a  onClick={() => goTo('EL8')}className="logo" href="#">
      <img src="/assets/logo.png" alt=""/>
      </a>

      <div
        className="mobile-wrapper"
        role="button"
        onClick={() => {setStatus(status === 'open' ? 'close' : 'open'),setIsOpened(!isOpened)}}
      >
        <span className={status}></span>
        <span className={status}></span>
        <span className={status}></span>
      </div>
    
   
      <nav >
        <ul >
          <li>
            <a  className={`header_link ${visibleSection === "section1" ? "selected" : ""}`} onClick={() => {goTo('EL1'),setVisibleSection('section1')}}>Section 01 </a>
          </li>
          <li>
            <a className={`header_link ${visibleSection === "section2" ? "selected" : ""}`}onClick={() =>{goTo('EL2'),setVisibleSection('section2')}}>Section 02</a>
          </li>
          <li>
          <a className={`header_link ${visibleSection === "section3" ? "selected" : ""}`} onClick={() => {goTo('EL3'),setVisibleSection('section3')}}>Section 03</a>
          </li>
          <li>
          <a className={`header_link ${visibleSection === "section4" ? "selected" : ""}`} onClick={() =>{goTo('EL4'),setVisibleSection('section4')}}>Section 04</a>
          </li>
          <li>
          <a className={`header_link ${visibleSection === "section5" ? "selected" : ""}`} onClick={() =>{goTo('EL5'),setVisibleSection('section5')}}>Section 05</a>
          </li>
          <li>
          <a className={`header_link ${visibleSection === "section6" ? "selected" : ""}`} onClick={() => {goTo('EL6'),setVisibleSection('section6')}}>Section 06</a>
          </li>
          <li>

          <a className={`header_link ${visibleSection === "section7" ? "selected" : ""}`} onClick={() => {goTo('EL7'),setVisibleSection('section7')}}>Section 07</a>
          </li>
       
        </ul>
      </nav>

     

    </div>
  </header>



  <div className="hero"ref={refs.EL8}>
  <ScrollAnimation animateIn='fadeIn'>

    <h1>
    
      <span>Excel NZ</span>
      <br />
      <div className="reveals-main">
       あなたの大切な留学を<div style={{color:randomColor}}>  
      <TextLoop interval={2000} children={shuffle(words)} /></div>
       サポートいたします。
 
    </div>
    </h1>
  

<a className="container" href="#">
  <span className="chevron"></span>
  <span className="chevron"></span>
  <span className="chevron"></span>
  <span className="chevron"></span>
  <span className="text">下にドラックしてみて</span>
</a>
</ScrollAnimation>
  </div>




<section className="news">
  <div className="news_inner">
    <h2><img src="/assets/bell.svg"
           style={{width:"35px",height:"40px",paddingRight:"2px"}}></img>お知らせ</h2>
    <div className="news_box">
    {loadingN ? (
          <Typography>お知らせを読み込中です</Typography>
    
      ) : (
        dataN &&
        dataN.notices.map((n) => (
        <blockquote>
        <dl>
          <dt><time>{moment(n.createdAt).format("YYYY/MM/DD")}</time></dt>
        <dd>{n.body}</dd>
      </dl>
    </blockquote>
        )))}

    </div>
  </div>
</section>

 



<Grid item ref={refs.EL1}>
  <Grid
   item
   container
   direction="row"
   className={classes.primaryContainer}
  //  style={{ backgroundColor:"#e6e7eb"}}
  style={{
  backgroundImage:`linear-gradient(rgba(36,70,105,.74), rgba(36,70,105,.74)), 
  url('assets/NZTram.jpg')`}}
 >
 
 <About/>

 <Grid item ref={refs.EL2}>
 <Grid
        item
        container
        direction="column"
        className={classes.rowContainer}
       
      >
<ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
<Grid item className="talk-bubble tri-right border round btm-left-in" style={{marginBottom:"1em"}}>

<Grid item container className="talktext">
   
    <p> &nbsp;留学成功の３つの鍵&nbsp;</p><span><img src="/assets/key.svg" style={{height:"30px",width:"30px"}}></img></span>
</Grid>
</Grid>
</ScrollAnimation>

        <Grid item container justify={matchesMD ? "center" : "center"}>
  
   
  
          <Grid
            item
            container
            direction="column"
            md
            alignItems={matchesMD ? "center" : "center"}
            className={classes.boxContainer}
          >
              <Grid item>
            <Typography  variant="h5">
            ①正しい留学先を選ぶ（国、都市、目的）
              </Typography>
    
            <Grid item container justify="center" style={{paddingTop:".7em"}}>
            <ScrollAnimation animateIn='fadeIn'
               animateOut='fadeOut'>
              <img
                src="/assets/earth.svg"
                alt="choose place for abroad"
                style={{ maxWidth: matchesMD ? 80 : 100 }}

              />
              </ScrollAnimation>
            </Grid>
            </Grid>

            <Grid item　style={{paddingTop:"2em"}}>
              <Typography variant="caption">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti possimus, sint cumque laudantium voluptates assumenda quam magnam non vitae delectus autem pariatur totam nemo quos reprehenderit necessitatibus temporibus. Maiores ex minus, mollitia omnis quas doloribus perferendis neque suscipit quidem tempore!
              </Typography>
            </Grid>
          </Grid>





          <Grid
            item
            container
            direction="column"
            md
          
            alignItems={matchesMD ? "center" : "center"}
            className={classes.boxContainer}
          >
            <Grid item>
            <Typography  variant="h5">
            ②正しい学校選び（生徒の特性、目的/ゴールにあった）
              </Typography>
            
            <Grid item container justify="center" style={{paddingTop:"1em"}}>
            <ScrollAnimation animateIn='fadeIn'
               animateOut='fadeOut'delay={1000}>
              <img
                src="/assets/school.svg"
                alt="choose school"
                style={{ maxWidth: matchesMD ? 80 : 100 }}

              />
              </ScrollAnimation>
            </Grid>
    
            </Grid>
            <Grid item style={{paddingTop:"2em"}}>
              <Typography variant="caption">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti possimus, sint cumque laudantium voluptates assumenda quam magnam non vitae delectus autem pariatur totam nemo quos reprehenderit necessitatibus temporibus. Maiores ex minus, mollitia omnis quas doloribus perferendis neque suscipit quidem tempore!
              </Typography>
            </Grid>
          </Grid>
          

          <Grid
            item
            container
            direction="column"
            md
            alignItems={matchesMD ? "center" : "center"}
            justify="center"
            className={classes.boxContainer2}
          >
          
            <Grid item>
            <Typography  variant="h5">
              ③エージェント選び（オリエンテーションプログラム）
              </Typography>
              <ScrollAnimation animateIn='fadeIn'
               animateOut='fadeOut' delay={2000}>
              <Grid item container justify="center" style={{paddingTop:"1em"}}>
            
              <img
                src="/assets/search.svg"
                alt="search company"
                style={{ maxWidth: matchesMD ? 80 : 100}}
              />
           
        </Grid>
        </ScrollAnimation>
            </Grid>
            <Grid item style={{paddingTop:"2em"}}>
              <Typography variant="caption">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti possimus, sint cumque laudantium voluptates assumenda quam magnam non vitae delectus autem pariatur totam nemo quos reprehenderit necessitatibus temporibus. Maiores ex minus, mollitia omnis quas doloribus perferendis neque suscipit quidem tempore!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
    

      </Grid>
      </Grid>
   
</Grid>
  </Grid> 


  


  <Grid item ref={refs.EL3}>

<Grid container className={classes.desContainer}justify="space-around" 
alignItems="center" direction="row">


<Grid sm item className={classes.textContainer}>

<Typography  variant="h3" align="center">
     　ガーディアン留学サポート
    </Typography>
      
<Typography variant="h5" align="center">
     　初めての留学サポート各種充実
    </Typography>
       
<Typography variant="h6" align="center"style={{marginTop:'40px',marginLeft:'2em'}}>
　　自然豊かな美しい国ニュージーランドの中でも特<br/>にのどかで
   かつ近代的な街クリストチャーチで一流の<br/>英語教育をご提案
   します。<br/>
   留学対象は中学、高校、大学、専門学校の正規留学、<br/>
   及び、短期、長期語学留学です。
    </Typography>
 </Grid>
 <ScrollAnimation animateIn='bounceInLeft'
                          animateOut='bounceOutRight'>
 <Grid sm item className={classes.animation}>
     <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
   </Grid>
   </ScrollAnimation>
 
</Grid>


</Grid>

<Grid item>


  <Grid item container className={classes.mainContainer}>



<Grid container className={classes.checkContainer}>
          <Grid item xs={12} className={classes.titleText}>
          ■ 1つでも当てはまった人は 今すぐ相談   <img src="/assets/warning.svg"
           style={{width:"50px",height:"50px",paddingTop:"20px"}}></img>
          </Grid>
         
          <Grid item xs={12} container>
           
            <Grid item xs container direction="column">
        <Hidden xsDown>
            <Grid item className={classes.checkboard} xs={1}>
            <ScrollAnimation animateIn='flipInY'
            animateOut='flipOutY'>
              <img src="/assets/clipboard.svg"style={{height:"7rem",width:"7rem"}} alt="clip"/>
             </ScrollAnimation>
              </Grid>
              </Hidden>

              <Grid item xs={11}>
                  <Grid item xs container direction="column">
                    <Grid item xs={12}>
                        <Grid item xs container direction="row" >
                          <Grid item xs={1}>
                          <ScrollAnimation animateIn='bounceInLeft'
                          animateOut='bounceOutRight'>
                          <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "2.5rem":"3rem"
                          ,width: matchesXS ? "2.5rem":"3rem"}} alt="clip"/>
                      </ScrollAnimation>
                          </Grid>
                          <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.3em"}}>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum.
                          </Grid>
                        </Grid>
                     
                    </Grid>
                    <Grid item xs={12}>
                     
                        <Grid item xs container direction="row">
                          <Grid item xs={1}>
                          <ScrollAnimation animateIn='bounceInRight'
                          animateOut='bounceOutLeft'>
                          <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "2.5rem":"3rem",width: matchesXS ? "2.5rem":"3rem"}}alt="clip"/>
                         </ScrollAnimation>
                          </Grid>
                          <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.3em"}}>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibus!
                          </Grid>
                        </Grid>
                     
                    </Grid>
                    <Grid item xs={12}>
                    
                        <Grid item xs container direction="row">
                          <Grid item xs={1}>
                          <ScrollAnimation animateIn='bounceInLeft'
                          animateOut='bounceOutRight'>
                          <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "2.5rem":"3rem",width: matchesXS ? "2.5rem":"3rem"}} alt="clip"/>
                          </ScrollAnimation>
                          </Grid>
                          <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.3em"}}>
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecat.
                          </Grid>
                        </Grid>
                    
                    </Grid>


                    <Grid item xs={12}>
                    
                        <Grid item xs container direction="row">
                          <Grid item xs={1}>
                          <ScrollAnimation animateIn='bounceInRight'
                          animateOut='bounceOutLeft'>
                          <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "2.5rem":"3rem",width: matchesXS ? "2.5rem":"3rem"}} alt="clip"/>
                         </ScrollAnimation>
                          </Grid>
                          <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.3em"}}>
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecat.
                          </Grid>
                        </Grid>
                    
                    </Grid>


                  </Grid>



                  
             
              </Grid>
              {/* サイズM 消す */}
              <Hidden mdDown>
              <ScrollAnimation animateIn='fadeIn' delay={500}>
              　<Link href="/contact">
              <Button
             
                  variant="contained"
                  className={classes.learnButton}
                >
             
               <span style={{ marginRight: 3}}>お問い合わせ</span>
        
                  <ButtonArrow
                    width={35}
                    height={35}
                    fill="#0B72B9"/>
                </Button> 
                </Link>
                </ScrollAnimation>
               </Hidden>

            </Grid>

          </Grid>     
        </Grid>
       
  
</Grid>

  </Grid>


 


  <Grid
   item
 >
   <Grid
     item
     container 
    className={classes.bannerContainer}
   style={{ backgroundColor: "#1546d6"}}
   >
     </Grid>
  </Grid>



  <Grid item ref={refs.EL4}>

<CallAnimation/>
</Grid>


<Grid item>
<Grid container justify="space-around" className={classes.flowContainer}
alignItems={matchesXS ?"center":"flex-start"} direction="column" >

  <Grid sm item className={classes.flow}>
  <Typography variant="h3" align="left">
    留学までの流れ <img src="/assets/passport.svg" style={{height:"50px",width:"50px",paddingTop:"10px"}}></img>
 </Typography>
<StepperFnc/>
</Grid>

<Grid sm item className={classes.imageContainer}>
<ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
<img src="/assets/preparation.jpg"
 style={{height:"200px",width:"300px",overflow: "hidden",
 borderRadius: "90%"}}
 alt="image prepare"/>
 </ScrollAnimation>
</Grid> 



</Grid>   
</Grid> 

 


  <Grid
   item
   container
   direction="column"
   className={classes.bannerContainer}
   justify="center"
   style={{ backgroundColor:"#2b0aad"}}
 >  
  </Grid>


<Grid item ref={refs.EL5} className={classes.svg}>
<Cards data={data} error={error} loading={loading}/>
</Grid> 
  


<Grid
   item
   container
   direction="column"
   className={classes.bannerContainer}
   justify="center"
   style={{ backgroundColor:"#2b0aad"}}
 >
  </Grid>

  <Grid item ref={refs.EL6}>
  <Carousel/>
  </Grid> 




  <Grid item ref={refs.EL7} >
  <Footer/>
  </Grid> 
</Grid>


)}
</ScrollNavigation>
</ElevationScroll>
</>
)
};




export default withApollo({ ssr: true })(Home)




