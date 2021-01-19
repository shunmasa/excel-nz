import React,{useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Typography, Tabs, Paper, Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import withApollo from '../../lib/withApollo'
import { useQuery} from '@apollo/react-hooks';
import GET_POST from "../../src/graphql/query/post";
import { useRouter } from "next/router";
// import StudentOverview from '../../src/components/StudentOverview'
// import Link from 'next/link';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{  
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2369adec' fill-opacity='0.42' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      width: '100%',
      height:"100%",
      maxHeight:"1500px",
      paddingTop: '10rem', 
      paddingBottom: '15rem',
      [theme.breakpoints.down("xs")]: {
        margin:0
      }
    },
    papper:{
      height:"100%",
      maxWidth: '80%',
      backgroundColor: "#ffffff",
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxHeight:"1500px",
      position: 'relative',
      textAlign: 'center',
      overflowX: 'hidden',
      margin:"5em 10% 5em 10%",
      paddingBottom:"2.5em",
      [theme.breakpoints.down("md")]: {
        maxWidth:"100%",
        margin:"3rem 1rem 5rem 1rem"
        },
      [theme.breakpoints.down("xs")]: {
        maxWidth:"100%",
        maxHeight:"100%",
        margin:0
      }
    },  
   
    item: {
      objectFit: 'cover',
      maxWidth: '500px',
      maxHeight: '300px',
      marginBottom:"1rem",
      marginTop: '1.5rem',
     
    },
    description: {
      marginTop: '1rem',
      marginRight: '1rem',
      marginLeft: '1rem',
      fontSize:"20px",
      fontWight:500,
      [theme.breakpoints.down("xs")]: {
        margin:0,
        fontSize:"15px"
      }
    },
    appBar: {
      position: 'fixed',
      backgroundColor:'#fff',
      color:"#808080",
      zIndex:theme.zIndex.drawer + 1
    },
    title: {
      marginLeft:"1rem",
      flex: 1,
    },
    flex: {
      flex: 1
    },
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StudentDialog = () =>{
  const router = useRouter();
  const { studentDialog} = router.query;
  console.log('student',studentDialog)
  const {data,error,loading} = useQuery(GET_POST,{
    variables: {postId:studentDialog},
  })
  console.log('pppdata',data)
  // console.log('pdata',data)
    let message = 'Post';
    if (loading) message = 'Loading...';
    if (error) message = `Error! ${error}`;
    if (data && data.post.length <= 0) message = 'No Post';
  const classes = useStyles();
  
  useEffect(()=> {
  if(loading){
    router.reload()
  }
  },[]) // eslint-disable-line
  


  return (
    <div>

    
      {/* <Dialog  fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}> */}
       
        <AppBar className={classes.appBar} >
          
          <Toolbar color="white">
            {/* <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton> */}
            {loading? (
          <Typography>お知らせを読み込中です</Typography>
    
      ) : (
     <>
            <Typography variant="h3" align="center" className={classes.title}>
              
          {`${data.post.postTitle} by ${data.post.username}さん`}
    </Typography>
    </>
)}
          </Toolbar>
        </AppBar>


       
    <div className={classes.root}>
      <Paper component={Box} className={classes.papper}elevation={2}>
      {loading? (
          <Typography>お知らせを読み込中です</Typography>
    
      ) : (
     <>
          <div>
    <img src={data.post.file} className={classes.item}/>

</div>

<div style={{ display: 'flex' }}>
  <Typography
    variant="body2"
    className={classes.description}
    align="left"
  >
   {data.post.description}
         
        
  </Typography>

</div>
</>
      
        )}

      </Paper>
    </div>

          
    </div>
           
  );
}

export default withApollo(StudentDialog)