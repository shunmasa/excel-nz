import ScrollNavigation from 'react-single-page-navigation';
// import ReactGA from "react-ga";
// import Head from "next/head";

import { motion, AnimateSharedLayout,useViewportScroll, useTransform  } from "framer-motion";
import React,{useState,useEffect,useCallback, useRef} from 'react';
import HeadLine from "../src/components/HeadLine"
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
import {Check} from '../src/components/Check'
import Background from '../src/components/Background'
import Footer from '../src/components/Footer'
import GET_POSTS from '../src/graphql/query/posts';
import Link from 'next/link'
import moment from 'moment'
import useSticky from "../src/components/UseStickey"
// import ListPost from '../src/components/ListPost'
import PhotoGallery from '../src/components/PhotoGallery'
import Loading from '../src/components/Loading'

import { withApollo } from '../lib/withApolloData'
import { useQuery } from '@apollo/react-hooks';
import About from '../src/components/about'
import Hidden from "@material-ui/core/Hidden";

import GET_NOTICES from '../src/graphql/query/notices'
import ButtonArrow from "../src/components/ButtonArrow";
import ScrollAnimation from '../node_modules/react-animate-on-scroll';
import Router from 'next/router';
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
      maxWidth: "25em",
      minWidth: "16em",
      marginTop: "2em",
      marginBottom:"5em",
      [theme.breakpoints.down("xs")]: {
        margin:0,
        marginLeft:"5rem"
      }
    },
   mainContainer:{
     width:"100%"
   },
   supportContainer:{
    width:"100%",
    height:"45em",
    [theme.breakpoints.down("md")]: {
      marginTop:"3em",
      height:"25em",
      maxWidth:"1280px",
      weidth:"100%", 
      },
      [theme.breakpoints.down("sm")]: {
        height:"35em" ,
        width:"100%",
        maxWidth:"960px"
        },
    [theme.breakpoints.down("xs")]: {
    height:"45em" 
    }
  },
    secondContainer:{
      height:"20em",
      [theme.breakpoints.down("md")]: {
        marginTop:"3em",
        height:"30em" ,
        width:"100%",
        maxWidth:"1280px"
        },
        [theme.breakpoints.down("sm")]: {
          height:"40em" ,
          width:"100%",
          maxWidth:"960px"
          },
      [theme.breakpoints.down("xs")]: {
       marginTop:"4em",
      height:"45em" 
      }
    },
  
    thirdContainer:{
      marginTop:"4em",
      height:"20em",
      weidth:"20em",
      [theme.breakpoints.down("md")]: {
        height:"25em",
        weidth:"100%",
        },
        [theme.breakpoints.down("sm")]: {
          height:"26em",
          weidth:"100%",
          },
      [theme.breakpoints.down("xs")]: {
      height:"28em",
      weidth:"100%",
      }
    },  
    rowContainer: {
      zIndex:100,
      marginTop:"2.5em",
      paddingTop:"2em",
      paddingLeft: "10.5em",
      paddingRight: "12.5em",
      [theme.breakpoints.down("sm")]: {
        padding:0,
        marign:0,
         },
      [theme.breakpoints.down("sm")]: {
     padding:0,
     marign:0,
      },
      
      [theme.breakpoints.down("xs")]: {
        padding:0,
        marign:0,
         }
    },
 
  boxContainer:{
    backgroundColor:"#fff",
    padding:"2em",
    marginRight:"1em",
 marginBottom:"1rem",
    height:"100%",
    maxHeight:"60rem",
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
    height:"100%",
    maxHeight:"60rem",
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
        height: "35rem",
        marginTop:"9rem",
        maxWidth: "80%",
        marginLeft: "10em",
        [theme.breakpoints.down("md")]: {
          height:"45em",
          maxWidth:"1280px",
          weidth:"100%", 
          marginLeft:0
          },
          [theme.breakpoints.down("sm")]: {
            height:"50em",
            maxWidth:"960px",
            weidth:"100%", 
            marginLeft:0
            },
        [theme.breakpoints.down("xs")]: {
         marginLeft:"2rem",
         marginRight:0,
         marginBottom:"3rem",
         weidth:"100%",
         maxWidth: "31rem",
        }
       
    },
    titleText:{
      fontSize:"1.7rem",
      marginLeft:"1.4em",
      marginBottom:"2em",
      [theme.breakpoints.down("xs")]: {
        margin:0,
        fontSize:"1.5rem"
      }
    },

    checkboard:{
      height:"5em",
      marginRight:"3em",
      marginLeft:"3em",
      width:"5rem",
     
  
    },
  
    btn: {
// -webkit-box-shadow: -4px 6px 5px 0px rgba(0,0,0,0.75);
// -moz-box-shadow: -4px 6px 5px 0px rgba(0,0,0,0.75);
      // boxShadow: "-2px 3px 1px 2px",
      marginTop:"1em",
      marginLeft:"3em",
      border: "2px solid #2930c2",
      borderWidth: 3,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "1.5rem",
      height: 80,
      padding: 8,
      textDecoration: "none",
      // border: 'none',
      width: 250,
    // borderRadius: 6,
    // boxShadow: '0 3px 5px 2px #2594f5',
    cursor: 'pointer',
    color: '#2930c2',
    backgroundSize: '200%',
    backgroundColor:"#fff",
    transition: 'all 0.3s ease-out',
    '&:hover': {
      backgroundPosition: 'right',
      background: "#2930c2",
      color: '#fff',
    }
      // [theme.breakpoints.down("md")]: {
      //   marginBottom: "2em"
      // }
    },
    btn1: {
      backgroundImage: 'linear-gradient(to left,#03478a, #3498db, #1e8bf7 )'
     },
    desContainer:{
    height: "25rem",
    marginTop: "1em",
    marginLeft: "10em",
   　width:"80%",
      [theme.breakpoints.down("md")]: {
        height:"35rem",
        maxWidth:"1280px",
        weidth:"100%",
        },
        [theme.breakpoints.down("sm")]: {
          height:"40rem",
          maxWidth:"960px",
          weidth:"100%",
          },
      [theme.breakpoints.down("xs")]: {
      height:"47rem",
      width:"100%",
      margin:0,
      marginLeft:0,
      }

      }
    ,
   textContainer: {
      minWidth: "30em",
      marginRight:"3em",
      maxHeight:"25em", 
      [theme.breakpoints.down("md")]: {
        maxHeight:"30em",
        maxWidth:"1280px",
        weidth:"100%",
        },
        [theme.breakpoints.down("sm")]: {
          maxHeight:"35em",
          maxWidth:"960px",
          weidth:"100%",
          },
      [theme.breakpoints.down("xs")]: {
        marginRight:0,
        width:"100%"
      }
    },
    // photoContainer: {
    //   height:"70rem",
    //   paddingLeft: "5em",
    //   paddingRight: "5em",
    //   [theme.breakpoints.down("sm")]: {
    //     paddingLeft: "1.5em",
    //     paddingRight: "1.5em"
    //   },
    // },
 
    bannerContainer:{
      height:"8rem",
      [theme.breakpoints.down("xs")]: {
       height:"6rem"
        
        }
    },
    bannerContainer2:{
      height:"6.5rem",
      [theme.breakpoints.down("xs")]: {
       height:"3.5rem"
        
        }
    },
     primaryContainer:{
      height:"100%",
      maxHeight:"157rem",
      paddingBottom:"30px",

      [theme.breakpoints.down("md")]: {
        height:"100%",
        maxHeight:"170rem",
        maxWidth:"1280px",
        weidth:"100%",
        },
        [theme.breakpoints.down("sm")]: {
          height:"100%",
          maxHeight:"185rem",
          maxWidth:"960px",
          weidth:"100%",
          },
      [theme.breakpoints.down("xs")]: {
      maxHeight:"355rem",
      height:"100%",
      weidth:"100%",
      maxWidth: "31.5rem",
        marginTop:0,
        paddingBottom:"6rem",
        paddingTop:0
      
      }
    },

    flowContainer:{
      // position:"relative",
      // width:"100%",
      height:"20em",
      width:"83em",
      marginLeft:"3em",
      marginBottom:"5em",
      [theme.breakpoints.down("md")]: {
        height:"30em",
        maxWidth:"1280px",
        weidth:"100%", 
        marginLeft:0,
        marginRight:0,
        },
        [theme.breakpoints.down("sm")]: {
          height:"35em",
          maxWidth:"960px",
          weidth:"100%", 
          marginLeft:0,
          marginRight:0,
          },
      [theme.breakpoints.down("xs")]: {
        height:"60em",
        marginTop:"1em",
        marginBottom:0,
        weidth:"100%",
        maxWidth: "31rem",
      
        
        }
     
    },
    flow:{
      marginLeft:"12em",
      width:"60%",
      [theme.breakpoints.down("md")]: {
        marginLeft:0,
        maxWidth:"1280px",
        weidth:"100%", 
        },
        [theme.breakpoints.down("sm")]: {
          marginLeft:0,
          maxWidth:"960px",
          weidth:"100%", 
          },
      [theme.breakpoints.down("xs")]: {
        width:"100%",
        margin:0
        
        }
    },
  
    imageContainer:{
       marginLeft:"10em",
       marginTop:"2em",
       [theme.breakpoints.down("md")]: {
       marginLeft:0,
        maxWidth:"1280px",
        weidth:"100%", 
        },
        [theme.breakpoints.down("sm")]: {
          marginLeft:0,
           maxWidth:"960px",
           weidth:"100%", 
           },
       [theme.breakpoints.down("xs")]: {
        marginLeft:"3em",
        
        }
      
    },
    svg:{


// backgroundColor: "#00b7ff",
// backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E")`

backgroundColor: "#bfdaff",
backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%234066cd' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%233042a9' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%233558c9' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%233b64a5' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%233151c1' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%2339769c' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23354fbb' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%233c8995' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%232c43b2' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%2347938b' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23293ba7' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23478973' points='943 900 1210 900 971 687'/%3E%3C/svg%3E")`,
backgroundAttachment: "fixed",
backgroundSize: "cover"

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
interface Title {
  title: string;
  color:string;
  index:string;
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

// const [visibleSection, setVisibleSection] = useState('');


const [isOpened, setIsOpened] = useState(false);
const [status, setStatus] = useState('close');


const [selected, setSelected] = useState("");

// const [isSticky, setSticky] = useState(false)
    useEffect(() => {
    setHeaderClassName(
      `${isOpened ? "open-nav" : ""}`
    );

   
  }, [isOpened]);

 
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData:PlaneData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};




const ReadLimit = ({ children, maxCharacter = 200 }) => {
  const text = children;
  const [isShrinked, setIsShrinked] = useState(true);
  // const resultString = text.slice(0, maxCharacter);
  const resultString = isShrinked ? text.slice(0, maxCharacter) : text;
  function toggleIsShrinked() {
    // e.stopPropagation();
    setIsShrinked(!isShrinked);
  }

  return (

    <Typography style={{fontSize:"1rem"}}>
          {resultString}
  
          <Button style={{marginLeft:"0.5rem"}}variant="outlined"　onClick={toggleIsShrinked} color="primary">
            {isShrinked ? "もっと読む" : "縮める"}
            </Button>
      
        
   </Typography>
    

  );
};



const screens:Title[] = [
  {
    index:"section1",
    title: "EXCELNZ",
    color: "#ff0055"
  },
  {
    index:"section2",
    title: "留学成功の鍵",
    color: "#1835f5"
  },
  {
    index:"section3",
    title: "サポート内容",
    color: "#22cc88"
  },
  {
    index:"section4",
    title: "留学適性判断",
    color: "#ffaa00"
  },
  {
    index:"section5",
    title: "留学体験談",
    color: "#0099ff"
  },
  {
    index:"section6",
    title: "ギャラリー",
    color: "#f403fc"
  },
  {
    index:"section7",
    title: "お問い合わせ",
    color: "#7c18f5"
  },

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
    
      <ScrollNavigation elements={{ section1: {}, section2: {} ,section3:{},section4:{},section5:{},section6:{},section7:{}}}>
    
    {({ refs,goTo,activeElement }) => (
    <Grid container direction="column" className={classes.mainContainer}>
    
      
      <header className={`${headerClassName} ${isSticky ? "navbar1 navbar-sticky" : "navbar1"}`} ref={element}>
    
        <div className="row">
       
          <a onClick={() => Router.push('/')} className="logo" href="#">
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
        
          <header>
    
    <AnimateSharedLayout>
    <nav>
          <ul style={{ transform: "translateZ(0)" }}>
            {screens.map(({ title, color,index}:Title, i) => (
              <motion.li
                animate 
                key={i}
                className={`title ${index === selected || activeElement === index ? "selected" :" "  }`}
                // id={`title ${activeElement === index && "selected"}`}
                style={{ color: index === selected || activeElement === index ? color : "#333" }}
                //@ts-ignore 
                onClick={() => {setSelected(activeElement === index&&index),goTo(index)}}
              >
     
                {index === selected  && (
                  <motion.a
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: color }}
                  />
                )}
                  { activeElement === index && (  
            
                  <motion.a
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: color }}
                  />
                )}
              
                {title}
              </motion.li>
              
    
    
            ))}
          </ul>
          </nav>
        </AnimateSharedLayout>
    </header>
      
    
    
        </div>
      </header>
    
    
    
      <div className="hero">
     
      {/* <div className="opacity">
        
  */}

      <HeadLine/>
      
    
    <a className="container" href="#">
      <span className="chevron"></span>
      <span className="chevron"></span>
      <span className="chevron"></span>
      <span className="chevron"></span>
      <span className="text">下にドラックしてみて</span>
    </a>

      </div>
    {/* </div> */}
    
    
    
    
    
    <section className="news">
    
      <div className="news_inner">
        <h2 ><img src="/assets/bell.svg"
               style={{width:"30px",height:"35px",paddingRight:"2px"}}></img>お知らせ</h2>
        <div className="news_box">
        {loadingN ? (
              <Loading/>
        
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
    
     

    <div className="App">
      <Background />
    </div>


     
    <Grid item>
     
      <Grid
      
       item
       container
       direction="row"
       className={classes.primaryContainer}
      // style={{background:`linear-gradient( to bottom, #0045ad ,#D5E2F2)`}}
      style={{background:`linear-gradient( to bottom,#1c2e4a,#0045ad)`}}
     >
   

     <Grid ref={refs.section1} >

     <About/>
    </Grid>

     <Grid ref={refs.section2}>
     <Grid

            item
            container
            direction="column"
            className={classes.rowContainer}
           
          >
    {/* <ScrollAnimation animateIn='bounceInRight'
      animateOut='bounceOutLeft'>
   
    </ScrollAnimation> */}

    <ScrollAnimation duration={5}
  animateIn='tada'
  initiallyVisible={true}>
   <Grid item className="talk-bubble tri-right border round btm-left-in" style={{marginBottom:"1em",marginTop:"1em"}}>
    
    <Grid item container className="talktext">
       
        <p> &nbsp;正しい留学成功の３つの鍵&nbsp;</p><span><img src="/assets/key.svg" style={{height:"30px",width:"30px"}}></img></span>
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
                ①正しい留学先を選ぶ−どうしてクライストチャーチなの？
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
                  <ReadLimit>政治、治安が安定し、留学生に対する理解とサポートが充実した国、ニュージーラ
ンド。世界初、政府による「留学生の生活保障に関する服務規程」が設置されてお
り、留学生の安全と権利が守られています。また教育先進国として、2017年エコノ
ミスト英誌では、ニュージーランドは未来教育指数（Education Future Skill）世
界１位に評価されました。世界クラスの教育を受けることが可能です。
そして、ニュージーランドの第二の都市、40万人が暮らすクライストチャーチ
は、バスシステムが整っていて、学校、文化施設、公共施設、公園やビーチへ
のアクセスが簡単です。都会でありながら自然を感じることが出来る街、多様
性に柔軟で人々が親切な街、それがクライストチャーチです。
ここクライストチャーチで、「アナタ流」の留学をご提案させていただきます
。（参考)
{/* <br/><a href="https://www.christchurchnz.com/study">https://www.christchurchnz.com/study</a> */}
</ReadLimit>
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
                ②正しい学校を選ぶ−個性に合った学校選び
                  </Typography>
                
                <Grid item container justify="center" style={{paddingTop:"1em"}}>
                <ScrollAnimation animateIn='fadeIn'
                   animateOut='fadeOut'delay={1000}>
                  <img
                    src="/assets/school.svg"
                    alt="choose school"
                    style={{ maxWidth: matchesMD ? 80 : 100,paddingTop:"30px" }}
    
                  />
                  </ScrollAnimation>
                </Grid>
        
                </Grid>
                <Grid item style={{paddingTop:"2em"}}>
                  <Typography variant="caption">
                  <ReadLimit>正しい学校を選ぶ−個性に合った学校選び
自分に合った学校選びは、留学環境の決め手です。
留学生一人ひとりの特性、目的/ゴールに合った校風、カリキュラムを考慮し、話し
合いながら学校選びをします。
中高校留学の場合、公立、私立（ミッション系も含む）、共学、男子校、女子校、アカデミック校、ラグビー強豪校、その他スポーツや音楽に力を入れた学校から考慮して選びます。

また、大学、専門学校、語学学校など、あなたの目的/ゴール、英語力に合った学校をご紹介いたします。年齢は問いません。自分に合った学校が見つかるはず。
必要な英語力は、渡航までに、中学生は英検３級レベル、高校生は準２級レベルい以上の英語力があることが望まれます。語学学校留学は、現段階での英語力から、留学を始めることが出来ます。大学、専門学留学におきましては、まずご相談ください。
</ReadLimit>
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
                  ③正しいエージェントを選ぶ−どうしてExcel NZなのか
                  </Typography>
                  <ScrollAnimation animateIn='fadeIn'
                   animateOut='fadeOut' delay={2000}>
                  <Grid item container justify="center" style={{paddingTop:"1em"}}>
                
                  <img
                    src="/assets/search.svg"
                    alt="search company"
                    style={{ maxWidth: matchesMD ? 80 : 100,paddingTop:"30px"}}
                  />
               
            </Grid>
            </ScrollAnimation>
                </Grid>
                <Grid item style={{paddingTop:"2em"}}>
                  <Typography variant="caption">
                  <ReadLimit>
                  一言に留学エージェントと言っても、サービス/業務内容、料金体制も様々です。
Excel NZの主なサービス/業務内容は、現地ガーディアンサポート業務です。ガーディアンと
は、身元引受人のことです。留学生の矢面に立つ存在です。
独自のオリエンテーションやワークショッププログラムを持ち、英語の習得及びコミュケー
ション力の向上のみに留まらず、人として自信とグローバルな視野を持ち、国境を超えた世
界を舞台に生きる力、人間性を育むサポートを目指します。Excel NZは、一人ひとりの留
学を、現地クライストチャーチでサポートします。また留学生、保護者、学校と、しっかり
コミュニケーションを取りながら、教育的配慮を持って留学生に関わっていきます。
Excel NZのモットーは、「もし、自分の子供が留学をして、こんな大人が身近にいて欲しい
、という大人でいる」ということ。励まし、教え、導き、時には叱り、時には甘やかす、業
務内容に現れない「信頼出来る人」であることをお約束いたします。
</ReadLimit>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
        
    
          </Grid>
          </Grid>
      
    </Grid>

      </Grid> 
    
    
      
    
    
      <Grid item ref={refs.section3}>
    
    <Grid container className={classes.desContainer}justify="flex-start" 
    alignItems="center" direction="row">
    
    
    <Grid sm item className={classes.textContainer}>
    
    <Typography  variant="h3">
    <span style={{color:"#4981eb",marginRight:matchesXS ?0:".5rem"}}>■</span>Excel NZの主なご提供サービス
        </Typography>
          
    {/* <Typography variant="h5"style={{marginLeft:"3rem",marginTop:"1rem"}}>
    Excel NZの主なご提供サービス
        </Typography> */}
           {/* align="center" */}
    <Typography variant="h6" style={{marginTop:'20px',marginLeft:matchesXS?"1rem":"2rem"}}>
  
    <br/>−中学、高校生正規留学案内、及び現地留学サポート
    <br/>−英語習得の為の語学留学案内、及び現地留学サポート
    <br/>−高校卒業後、進路としての大学、各種専門学校の留学案内、及び
    <br/>現地留学サポート
・その他サービス
    <br/>−無料各種学校申し込み代行、海外旅行保険加入代行
        </Typography>
     </Grid>
     <ScrollAnimation animateIn='bounceInLeft'animateOut='bounceOutRight'>
     <Grid sm item className={classes.animation}>
         <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
       </Grid>
       </ScrollAnimation>
     
    </Grid>
    
    
    </Grid>
    <CallAnimation/>
   
    
    
  
      <Grid item ref={refs.section4}>
      <Grid item>
<Grid item container className={classes.supportContainer}>



<Grid container className={classes.checkContainer}>
        <Grid item xs={12} className={classes.titleText}>
        <Typography  variant="h3" >
       <span style={{color:"#4981eb",marginRight:".5rem"}}> ■ </span>1つでも当てはまった人は 今すぐ相談  
        </Typography>
        </Grid>
       
        <Grid item xs={12} container>
         
          <Grid item xs container direction="column">
      <Hidden xsDown>
          <Grid item className={classes.checkboard} xs={1}>


          <ScrollAnimation  
          duration={7}
          animateIn='tada'
          initiallyVisible={true}>
            <img src="/assets/clipboard.svg"style={{height:"6rem",width:"6rem"}} alt="clip"/>
           </ScrollAnimation>
            </Grid>
            </Hidden>

            <Grid item xs={11}>
                <Grid item xs container direction="column">
                  <Grid item xs={12}>
                      <Grid item xs container direction="row" >
                        <Grid item xs={1} >
                        <ScrollAnimation animateIn='bounceInRight'
                        animateOut='bounceOutLeft'>
                        <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "2.5rem":"3rem"
                        ,width: matchesXS ? "2.5rem":"3rem"}} alt="clip"/>
                    </ScrollAnimation>
                  
                     {/* <Check /> */}
                  
                        </Grid>
                        <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.3em"}}>
                        ニュージーランドに興味があり、ニュージーランドに留学してみたい。
                        </Grid>
                      </Grid>
                   
                  </Grid>
                  <Grid item xs={12}>
                   
                      <Grid item xs container direction="row">
                        <Grid item xs={1}>
                        <ScrollAnimation animateIn='bounceInLeft'
                        animateOut='bounceOutRight'>
                        <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "2.5rem":"3rem"
                        ,width: matchesXS ? "2.5rem":"3rem"}} alt="clip"/>
                    </ScrollAnimation>
                        {/* <Check />
                      */}
                     
                        </Grid>
                        <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.3em"}}>
                        留学を通して、いろんなことに挑戦してみたい。
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
                        留学を通して、英語とコミュニケーション力を身につけたい。
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
                        留学を通して、多様性を肌で感じ、グローバルな感覚を見につけて
                        <br/>人として大きく成長したい。
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
                className={classes.btn}
              >
           
             <span style={{ marginRight: 3}}>お問い合わせ</span>
      
                <ButtonArrow
                  width={35}
                  height={35}
                  fill="#fff"/>
              </Button> 
              </Link>
              </ScrollAnimation>
             </Hidden>

          </Grid>

        </Grid>     
      </Grid>
     

</Grid>

</Grid>
    
    {/* <CallAnimation/> */}
    </Grid>
    
    
    <Grid item>
    <Grid container justify="space-around" className={classes.flowContainer}
    alignItems={matchesXS ?"center":"flex-start"} direction="column" >
    

    <Grid sm item className={classes.imageContainer}>
    <ScrollAnimation animateIn='bounceInLeft'
      animateOut='bounceOutRight'>
    <img src="/assets/preparation.jpg"
     style={{height:"200px",width:"300px",overflow: "hidden",
     borderRadius: "90%"}}
     alt="image prepare"/>
     </ScrollAnimation>


    </Grid> 

      <Grid sm item className={classes.flow}>
      <Typography variant="h4"align="left">
      <span style={{marginRight:".5rem"}}>○</span>ご渡航までの流れ 
     </Typography>
    <StepperFnc/>
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
    
    
    <Grid item ref={refs.section5} className={classes.svg}>
    <Cards data={data} error={error} loading={loading}/>
    </Grid> 
      
    

    <Grid item ref={refs.section6}>
    <PhotoGallery/>
   
    </Grid> 
    
    {/* <Grid item style={{ height: "300vh",backgroundColor: "#3b6fe0", paddingTop: "320px"}}>
    <Gallery/>
    </Grid>  */}
   
    <Grid
       item
       container
       direction="column"
       className={classes.bannerContainer}
       justify="center"
       style={{ backgroundColor:"#2b0aad"}}
     >
      </Grid>
    
      <Grid item ref={refs.section7}>
      <Carousel/>
      </Grid> 
    
  
    
    
      <Grid item>
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




