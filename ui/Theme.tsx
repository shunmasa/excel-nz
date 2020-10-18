import { createMuiTheme} from "@material-ui/core/styles";

const DarkBlue="#1769aa";
const Blue = "#2196f3";
const LightBlue = "#4dabf5";

const LightGrey = "#ececec";
const DarkGrey ="#b2b2b2"
const Purpule="#5c6bc0"
const Dark = "#0a0a0a"

export default createMuiTheme({
  palette: {
    primary: {
      main: Blue,
      light:LightBlue,
      dark:DarkBlue,
      contrastText:"#fff"
    },
    secondary: {
      main:Purpule,
      dark:DarkGrey,
      light:LightGrey,
      contrastText:"#fff"
    },
  },
  typography: {
    h1: {
      fontFamily: "Raleway",
      fontWeight: 500,
      fontSize: "3rem",
      color: Blue,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: `Playfair Display, serif`,
      fontSize: "2.2rem",
      color: Blue
    },
    h4: {
      fontFamily: `Playfair Display, serif`,
      fontSize: "2.2rem",
      color:"black"
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: Dark
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: DarkGrey
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem"
    },
    body1: {
      fontSize: "1.25rem",
      color: DarkGrey,
      fontWeight: 300
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: DarkGrey
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: Blue,
        fontSize: "1rem"
      },
   
    },
    MuiInputBase:{
      root:{
        backgroundColor: "#fff",
        color: DarkGrey,
        fontSize: "1.25rem",
        fontWeight: 300,
      },
    },
    MuiInput: {
      root: {
        color: DarkGrey,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${Blue}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${Blue}`
        }
      }
    }
  }
});
