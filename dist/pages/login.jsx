var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LOGIN_USER from '../src/graphql/mutation/login';
import { validateEmail } from '../src/utils/validation';
import { setToken } from '../src/utils/apolloClient';
import Cookies from 'js-cookie';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import Router from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { withApollo } from '../lib/withApolloData';
// import { useRouter } from "next/router";
function Copyright() {
    return (<Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      developer masa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>);
}
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const login = () => {
    const [props, setProps] = useState({ email: "",
        password: "" });
    const [login, { data, error }] = useMutation(LOGIN_USER);
    console.log("data:", data);
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log('value:', value);
        setProps(prevState => (Object.assign(Object.assign({}, prevState), { [name]: value })));
    };
    useEffect(() => {
        const loginData = () => __awaiter(void 0, void 0, void 0, function* () {
            if (data) {
                // const { data } = await user.query({query: LOGIN_USER,variables: { ...props },});
                const { token, userId } = data.login;
                console.log("token", token);
                setToken(token);
                Cookies.set('userId', userId, { expires: 7 });
            }
        });
        loginData();
    }, [data]); // eslint-disable-line
    const handleSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("email", props, "email", props.email);
        event.preventDefault();
        try {
            if (validateEmail(props.email)) {
                yield login({ variables: Object.assign({}, props) });
                Router.replace('/dashboard');
            }
            else {
                toast.error('メールアドレスが間違っています');
            }
        }
        catch (error) {
            toast.error(error);
        }
    });
    const classes = useStyles();
    return (<Grid container component="main" className={classes.root}>
   
  <CssBaseline />
  <Grid item xs={false} sm={4} md={7} className={classes.image}/>
  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
   <div className={classes.paper}>
     <Avatar className={classes.avatar}>
       <LockOutlinedIcon />
     </Avatar>
     <Typography component="h1" variant="h5">
      ご担当者様ログインページ
     </Typography>
     <form className={classes.form} noValidate onSubmit={handleSubmit}>
       <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" value={props.email} onChange={handleChange} autoComplete="email" autoFocus/>
       <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" value={props.password} onChange={handleChange} id="password" autoComplete="current-password"/>
    
             <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} value='Submit'>
              Sign In
            </Button>
       <Box mt={5}>
         <Copyright />
       </Box>
     </form>
   </div>
 </Grid>
    </Grid>);
};
export default withApollo({ ssr: true })(login);
