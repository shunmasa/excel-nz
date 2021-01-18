import React from 'react';
import Grid from "@material-ui/core/Grid";
import Lottie from "react-lottie";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import SupportData from '../../public/assets/support.json';
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ScrollAnimation from 'react-animate-on-scroll';
import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => createStyles({
    // root: {
    //  marginTop:'7em'
    // },   
    animation: {
        maxWidth: "25em",
        // minWidth: "16em",
        marginTop: "2em",
        marginLeft: "12em",
        marginRight: "1em",
        [theme.breakpoints.down("md")]: {
            maxWidth: "20em",
            margin: 0
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "35em",
            margin: 0
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: "25em",
            marginLeft: "5em",
            margin: 0
        }
    },
    desContainer: {
        height: "42rem",
        [theme.breakpoints.down("md")]: {
            height: "50rem",
            maxWidth: "1280px",
            weidth: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            height: "50rem",
            maxWidth: "768px",
        },
        [theme.breakpoints.down("xs")]: {
            height: "65rem",
            maxWidth: "35em"
        }
    },
    textContainer: {
        minWidth: "50em",
        marginTop: "5em",
        marginRight: "10em",
        marginBottom: "5em",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            minWidth: "30em",
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
            marginTop: 0,
            marginBottom: 0,
        }
    },
}));
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SupportData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
const CallAnimation = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    return (<>
      
    <Grid item>

    <Grid container className={classes.desContainer} justify="space-around" alignItems="center" direction="row">
      <Hidden xsDown>  
 <Grid sm item className={classes.animation}>
 <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>
     <Lottie options={defaultOptions} height={"100%"} width={"100%"}/>
     </ScrollAnimation>
   </Grid>
   </Hidden> 

   


   <Grid sm item className={classes.textContainer}>
    <Typography variant="h4" align="center">
    <span style={{ marginRight: ".5rem" }}>○</span>ExcelNZ留学サポート内容のご紹介
    </Typography>
      
    <Typography variant="h6" style={{ marginLeft: matchesXS ? 0 : "8rem" }}>
現地ガーディアンサポート内容
    </Typography>
       
    <Typography variant="h6" style={{ marginTop: '35px', marginLeft: matchesXS ? 0 : '7em', fontSize: "1.3em" }}>
    <span style={{ border: "1px solid #0362fc" }}>留学手続き代行/渡航準備</span>
    <span style={{ marginLeft: "0.5rem", border: "1px solid #0362fc" }}>到着後</span> 空港迎え、到着後のオリエンテーション（学校生活、NZ生活について、地図の見方、バスの乗り方、登下校方法の確認、バスカード購入、携帯電話の使い方、学生ビザ申請及び健康診断（学生ビザ申請の必要があれば）、銀行口座開設、両替、インターネットバンキングの設定、銀行口座の詳細の報告）、初登校日　同行、制服/文房具購入サポート
    <br /><span style={{ border: "1px solid #0362fc", marginRight: "0.5rem" }}>留学中</span>学校生活全般サポート、ホームステイサポート
病気、怪我、事故、緊急災害時の24時間対応、必要な時の個別訪問
保護者へ近況報告レポート（月一回）
定期的な学校訪問(2週間に一度)、家庭訪問（1学期または必要に応じて）、生活指導、学習指導<br />学期に一度のワークショップの開催（近況報告、学習・生活アドバイス、日本食、楽しいアクティビティー）NCEA対策会の開催
休暇中のアクティビティーや旅行のアレンジ、スキートリップの催行など
成績表の翻訳、三者面談同行、病気/怪我の際の医療機関への同行、帰国航空券の予約及び日付変更、海外旅行保険の申請代行、
帰国の際の空港サポート、次年度の学費等の継続手続きサポート、学校への各種支払いの代行（インターネットバンキング）、
進路相談<br /><span style={{ border: "1px solid #0362fc", marginRight: "0.2rem" }}>その他</span>必要に応じて学校、ホームステイ、保護者との連絡を取りながら、連携して留学生をサポートします。
    </Typography>
 </Grid>

  
    </Grid>

    <Hidden mdUp>  
 <Grid sm item className={classes.animation}>
 <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>
     <Lottie options={defaultOptions} height={"100%"} width={"100%"}/>
     </ScrollAnimation>
   </Grid>
   </Hidden> 



    </Grid>

    </>);
};
export default CallAnimation;
