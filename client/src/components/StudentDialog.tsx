import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import StudentOverview from './StudentOverview'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'fixed',
      backgroundColor:'#fff',
      color:"#808080",
      zIndex:theme.zIndex.drawer + 1
    },
    title: {
      marginLeft: theme.spacing(2),
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

const StudentDialog = (props) =>{

  const classes = useStyles();

  return (
    <div>
      <Button fullWidth color="primary" variant="contained"
      onClick={props.handleClickOpen(props.dataId)}>
           もっと読む
          </Button>
      <Dialog  fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} >
          <Toolbar color="white">
            <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h3" align="center">
   {`${props.data.postTitle} by ${props.data.username}さん`}
    </Typography>

          </Toolbar>
        </AppBar>


       <StudentOverview data={props.data} dataId={props.dataId}
       dialog={props.dialog}/>
      </Dialog>
    </div>
  );
}

export default StudentDialog