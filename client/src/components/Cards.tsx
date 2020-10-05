import React,{useState,useEffect}from 'react'
import { useRouter } from "next/router";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  TableFooter,
  TableRow,
  TablePagination,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';

import ScrollAnimation from '../../pages/node_modules/react-animate-on-scroll';
import StudentDialog from '../../pages/card/[studentDialog]'
// import { withApollo } from '../../lib/withApolloData'
// import GET_POSTS from '../graphql/query/posts';
// import { useMutation,useQuery} from '@apollo/react-hooks';
import moment from 'moment'
import Link from 'next/link';
import Loading from '../../src/components/Loading'
 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  papper:{
    height:"100%",
    maxWidth: '80%',
    margin:"8em 13em 15em 13em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
      marginTop:"3rem",
      marginRight:"10%",
      marginLeft:"10%",
      marginBottom:"3rem"
    }
  },  
  card:{
  margin:"3em 2em 3em 2em",
 
  height:"100%",
  maxHeight:"600px",
  transition: "0.3s",
  boxShadow: "0 8px 40px -12px rgba(0,  0, 0, 0.3)",
  border: "2px solid #f5f2eb",
  '&:hover':  {
    boxShadow: "0 16px 70px -12.125px rgba(0, 0, 0, 0.3)"
  }
  },
  file: {
    marginRight:"2.5%",
    marginLeft:"2.5%",
    width:"95%",
    height:160,
  }, 
  switch:{
    marginTop:"5em"
  },
  pagination:{
    width:"100%",
    marginBottom:"3em",
  },

  description:{
    marginTop:"2rem",
    height:"100%",
  maxHeight:"400px",
  },
  box:{
marginTop:"2rem"
  },
  text:{
    fontSize:"0.5em"
  }
  })
)


// width:"100%"
// maxWidth:"600px"

interface Props {
  toggleListReverse:() => void;
  toggleSortDate:() => void;
}


function SwitchLabels(props:Props) {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch onClick={props.toggleSortDate} checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Switch
          onClick={props.toggleListReverse} 
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />

    </FormGroup>
  );
}

interface Data {
  _id:number,
  file:string,
  postTitle:string,
  description:string,
  createdAt:string,
  username:string
}




function Cards({data,error,loading}) {
  const { file } = useStyles()
  const classes = useStyles();
  const router = useRouter();


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [postList,setPostList] = useState<Data[]>([])
  const [isOldestFirst,setisOldestFirst] = useState(true)
  
  const [open, setOpen] = React.useState(false);




  const { postId } = router.query;
  // const [loading,setLoading] = useState(false)
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage = (event:unknown, newPage:number) => {
    setPage(newPage);


  }

  // const handleClickOpen = () => {
  //   setOpen(true);
  

  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };


  const sortByDate = () => {
    let newPostList = postList
    if (isOldestFirst) {
      newPostList = postList.sort((a, b) =>Date.parse(a.createdAt) - Date.parse(b.createdAt))
    } else {
      newPostList = postList.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    }
    setPostList(newPostList)
    setisOldestFirst(!isOldestFirst)
  }

  const toggleSortDate =()=> {
    sortByDate()
 }

 const toggleListReverse = ()=> {
  let newPostList = postList.reverse()
  setPostList(newPostList)
}

useEffect(()=>{
  if(!loading){
    const postList = data.posts
    setisOldestFirst(true)
    setPostList(postList)
  }
  // setLoading(!loading)
  
},[postList])

const ReadLimit = ({ children, maxCharacter = 120 }) => {
  const text = children;
  const resultString = text.slice(0, maxCharacter);

  return (

    <Typography style={{fontSize:"1rem"}}>
          {resultString}
   </Typography>
    
 
   
  );
};

  return (
    <Paper component={Box} style={{padding:"15px"}} className={classes.papper}elevation={3}>
 
     
   <Grid item className={classes.switch}>
    <Grid item container direction="row"  justify="center" lg>
    <ScrollAnimation animateIn='fadeIn'>
    <Typography variant="h1">
            みんなの留学体験談
      </Typography> 
</ScrollAnimation>
    
      </Grid>
      <Grid item container direction="row"  justify="flex-end" md>
      <SwitchLabels toggleListReverse={toggleListReverse} toggleSortDate={toggleSortDate}/>
      </Grid>
      </Grid> 

      {loading ?
        <Loading/>  : (
  <Grid container spacing={3} alignItems="center" justify="space-around" >
    
  {(rowsPerPage > 0
   ? postList && postList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  : postList )
      .map((d)=>( 
    <Grid key={d._id} item className={classes.card} container direction="column" md={4}>
       <ScrollAnimation animateIn='fadeIn' delay={300}>
    <Grid item >
      <img src={d.file} className={file} alt="" />
          </Grid>
      <Grid item className={classes.description}>
     
        <Typography variant="h5" gutterBottom>
         {d.postTitle} 
        </Typography>
    
      </Grid>
      <Grid item>
      <ReadLimit>
          {d.description}
          </ReadLimit>
      </Grid>
      <Grid  className={classes.box}item container direction="row" justify="space-between">
        <Box display="inline-block" >
          <Link href={`/card/[studentDialog]?studentDialog=${d._id}`} as={`/card/${d._id}`}>
        <Button fullWidth color="primary" variant="contained"
        >
           もっと読む
          </Button>
          </Link>
        </Box>
        {/* <Typography variant="h6" gutterBottom>
        <time>{d.createdAt}</time>
          </Typography> */}
      </Grid>
      </ScrollAnimation>
    </Grid>
))}

</Grid>
 )}
  
     
<TableFooter>
<TableRow>
  <TablePagination
    rowsPerPageOptions={[2,4,6]}
    colSpan={2}
    count={postList.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onChangePage={handleChangePage}
    onChangeRowsPerPage={handleChangeRowsPerPage}
    >
  </TablePagination>
</TableRow>
</TableFooter>
    
    
    </Paper>
  )
}


export default Cards