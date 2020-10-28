import React, { useState } from "react";
import Head from "next/head";
// import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Link from 'next/link';
import ButtonArrow from "../src/components/ButtonArrow";
const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url("/assets/earth.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        // paddingBottom: "10em",
        [theme.breakpoints.down("md")]: {
            height: "100vh"
        }
    },
    homeButton: {
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        }
    },
    message: {
        border: `2px solid ${theme.palette.primary.main}`,
        marginTop: "5em",
        borderRadius: 5
    },
    sendButton: {
        // ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: "orange",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 225
        }
    },
}));
export default function Contact(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailHelper, setEmailHelper] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneHelper, setPhoneHelper] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        backgroundColor: ""
    });
    const onChange = event => {
        let valid;
        switch (event.target.id) {
            case "email":
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if (!valid) {
                    setEmailHelper("Invalid email");
                }
                else {
                    setEmailHelper("");
                }
                break;
            case "phone":
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
                if (!valid) {
                    setPhoneHelper("Invalid phone");
                }
                else {
                    setPhoneHelper("");
                }
                break;
            default:
                break;
        }
    };
    // const onConfirm = () => {
    //   setLoading(true);
    //   ReactGA.event({
    //     category: "Message",
    //     action: "Sent Message"
    //   });
    //   axios
    //     .get(
    //       "https://us-central1-material-ui-course-951d5.cloudfunctions.net/sendMail",
    //       {
    //         params: {
    //           name: name,
    //           email: email,
    //           phone: phone,
    //           message: message
    //         }
    //       }
    //     )
    //     .then(res => {
    //       setLoading(false);
    //       setOpen(false);
    //       setName("");
    //       setEmail("");
    //       setPhone("");
    //       setMessage("");
    //       setAlert({
    //         open: true,
    //         message: "Message sent successfully!",
    //         backgroundColor: "#4BB543"
    //       });
    //     })
    //     .catch(err => {
    //       setLoading(false);
    //       setAlert({
    //         open: true,
    //         message: "Something went wrong, please try again!",
    //         backgroundColor: "#FF3232"
    //       });
    //     });
    // };
    const buttonContents = (<React.Fragment>
      メッセージを送る
      <img src="/assets/send.svg" alt="paper airplane" style={{ marginLeft: "1em" }}/>
    </React.Fragment>);
    return (<Grid container direction="row">
      <Head>
        <title key="title">お問い合わせフォーム</title>
        <meta name="description" key="description" content="Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!"/>
        <meta property="og:title" content="Bringing West Coast Technology to the Midwest | Contact Us" key="og:title"/>
        <meta property="og:url" key="og:url" content="arc.com/contact"/>
        <link rel="canonical" key="canonical" href="https://excel/contact.js"/>
      </Head>
      <Grid item container direction="column" justify="center" alignItems="center" style={{
        marginBottom: matchesMD ? "5em" : 0,
        marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0
    }} lg={4} xl={3}>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h1" style={{ lineHeight: 1, paddingTop: "1em" }}>
                お問い合わせ
              </Typography>
              <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{ color: theme.palette.primary.main }}>
              
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img src="/assets/phone.svg" alt="phone" style={{ marginRight: "0.5em" }}/>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ color: theme.palette.primary.main, fontSize: "1rem" }}>
                  <div style={{ textDecoration: "none", color: "inherit" }}>
                    (555) 555-5555
                  </div>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img src="/assets/email.svg" alt="envelope" style={{ marginRight: "0.5em", verticalAlign: "bottom" }}/>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ color: theme.palette.primary.main, fontSize: "1rem" }}>
                  <a href="mailto:excel@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
                    excel@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ width: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField label="お名前" id="name" fullWidth value={name} onChange={event => setName(event.target.value)}/>
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField label="メールアドレス" error={emailHelper.length !== 0} helperText={emailHelper} id="email" fullWidth value={email} onChange={onChange}/>
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField label="電話番号" helperText={phoneHelper} error={phoneHelper.length !== 0} id="phone" fullWidth value={phone} onChange={onChange}/>
              </Grid>
            </Grid>
            <Grid item style={{ width: "20em" }}>
              <TextField InputProps={{ disableUnderline: true }} value={message} className={classes.message} multiline placeholder="質問などあればこちらにご記入ください" fullWidth rows={10} id="message" onChange={event => setMessage(event.target.value)}/>
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
            <button>送信</button>
              <Button disabled={name.length === 0 ||
        message.length === 0 ||
        phoneHelper.length !== 0 ||
        emailHelper.length !== 0 ||
        email.length === 0 ||
        phone.length === 0} variant="contained" className={classes.sendButton} onClick={() => setOpen(true)}>
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <Dialog style={{ zIndex: 1400 }} open={open} fullScreen={matchesSM} onClose={() => setOpen(false)}>
       <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography style={{ paddingTop: "1em" }} align="center" variant="h4" gutterBottom>
               お問い合わせの確認
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField label="お名前" id="name" fullWidth value={name} onChange={event => setName(event.target.value)}/>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField label="メールアドレス" error={emailHelper.length !== 0} helperText={emailHelper} id="email" fullWidth value={email} onChange={onChange}/>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField label="電話番号" helperText={phoneHelper} error={phoneHelper.length !== 0} id="phone" fullWidth value={phone} onChange={onChange}/>
            </Grid>
          </Grid>
          <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
            <TextField InputProps={{ disableUnderline: true }} value={message} className={classes.message} multiline fullWidth rows={10} id="message" onChange={event => setMessage(event.target.value)}/>
          </Grid>
          <Grid item container direction={matchesSM ? "column" : "row"} style={{ marginTop: "2em" }} alignItems="center">
            <Grid item>
              <Button style={{ fontWeight: 300 }} color="primary" onClick={() => setOpen(false)}>
                取り消し
              </Button>
            </Grid>
            <Grid item>
              <Button disabled={name.length === 0 ||
        message.length === 0 ||
        phoneHelper.length !== 0 ||
        emailHelper.length !== 0 ||
        email.length === 0 ||
        phone.length === 0} variant="contained" className={classes.sendButton}>
                {loading ? <CircularProgress size={30}/> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar open={alert.open} message={alert.message} ContentProps={{ style: { backgroundColor: alert.backgroundColor } }} anchorOrigin={{ vertical: "top", horizontal: "center" }} onClose={() => setAlert(Object.assign(Object.assign({}, alert), { open: false }))} autoHideDuration={4000}/>
      <Grid item container direction={matchesMD ? "column" : "row"} className={classes.background} alignItems="center" justify={matchesMD ? "center" : undefined} lg={8} xl={9}>
        <Grid item style={{
        marginLeft: matchesMD ? 0 : "3em",
        textAlign: matchesMD ? "center" : "inherit"
    }}>
       
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2">
              　Excel NZ
                <br />
                <span style={{ fontSize: "1.8rem" }}>クライストチャーチでの留学お考えの方<br />
                一度お問い合わせください。</span>
              </Typography>
              <Typography align={matchesMD ? "center" : undefined} variant="subtitle2" style={{ fontSize: "1.5rem" }}>
               私たちがあなたの留学のお手伝いたします。
              </Typography>
              <Grid container justify={matchesMD ? "center" : undefined} item>
               <Link href="/home">
                <Button variant="outlined" className={classes.homeButton}>
                  <span style={{ marginRight: 5 }}>ホームに戻る</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.primary.main}/>
                </Button> 
         </Link>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
    
      </Grid>
    </Grid>);
}
