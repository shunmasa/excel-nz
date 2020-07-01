import React,{useState,useEffect}from 'react'
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
// import Spinner from './Spinner';
import ScrollAnimation from 'react-animate-on-scroll';
import StudentDialog from './StudentDialog'
// import { withApollo } from '../../lib/withApolloData'
// import GET_POSTS from '../graphql/query/posts';
// import { useMutation,useQuery} from '@apollo/react-hooks';
import moment from 'moment'
 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  papper:{
    height:"100%",
    maxWidth: '90%',
    margin:"15em 8em 20em 8em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
      marginTop:"3rem",
      marginRight:"5%",
      marginLeft:"5%",
      marginBottom:"3rem"
    }
  },  
  card:{
  margin:"3em 1em 3em 1em",
  height:"100%",
  minHeight:"100%",
  transition: "0.3s",
  boxShadow: "0 8px 40px -12px rgba(0,  0, 0, 0.3)",
  border: "2px solid #f5f2eb",
  '&:hover':  {
    boxShadow: "0 16px 70px -12.125px rgba(0, 0, 0, 0.3)"
  }
  },
  file: {
    maxWidth: '500px',
    width:"100%",
    height:160,
  }, 
  switch:{
    marginTop:"5em"
  },
  pagination:{
    width:"100%",
    marginBottom:"3em",
  },
  typography:{
    backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 0.2em",
    backgroundPosition: "0 84%",
    transition: "background-size 0.60s ease-in",
    '&:hover':{
      backgroundSize: "100% 88%"
    }
  },
  description:{
    marginTop:"1rem"
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
        control={<Switch onClick={props.toggleSortDate}checked={state.checkedA} onChange={handleChange} name="checkedA" />}
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

  // const { data, error,loading,fetchMore } = useQuery(
  //   GET_POSTS 
  // );
//   let message = 'Posts';
//   if (loading) message = 'Loading...';
//   if (error) message = `Error! ${error}`;
//   if (data && data.posts.length <= 0) message = 'みんなの体験談は今のところありません';
//  console.log('pdataa',data)
  // console.log('datapost',data)
 

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [postList,setPostList] = useState<Data[]>([])
  const [isOldestFirst,setisOldestFirst] = useState(true)
  const [dialog,setDialog] = useState(null)
  const [open, setOpen] = React.useState(false);
  // const [loading,setLoading] = useState(false)
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage = (event:unknown, newPage:number) => {
    setPage(newPage);


  }

  const handleClickOpen = id => e => {
    setOpen(true);
    setDialog(id);
    console.log('dialog;',dialog)
  };
  const handleClose = () => {
    setOpen(false);
  };

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
  const postList = data.posts
  setisOldestFirst(true)
  setPostList(postList)
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
    <Typography className={classes.typography} variant="h1"  >
            みんなの留学体験談
      </Typography> 
</ScrollAnimation>
    
      </Grid>
      <Grid item container direction="row"  justify="flex-end" md>
      <SwitchLabels toggleListReverse={toggleListReverse} toggleSortDate={toggleSortDate}/>
      </Grid>
      </Grid> 

      {loading ?
           <Typography>体験談を読み込中です</Typography>  : (
  <Grid container spacing={3} alignItems="center" justify="space-around" >
    
  {(rowsPerPage > 0
   ? postList && postList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  : postList )
      .map((d)=>( 
    <Grid key={d._id} item className={classes.card} container direction="column" md={5}>
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
          <StudentDialog data={d} dataId={d._id} dialog={dialog} open={open} handleClose={handleClose} handleClickOpen={handleClickOpen}/>
        </Box>
        <Typography variant="h6" gutterBottom >
        {moment(d.createdAt).format("YYYY/MM/DD")}
          </Typography>
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