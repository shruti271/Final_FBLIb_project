import { createTheme, } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
export const themeLight = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background:
            "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});

const globalStyles = makeStyles((theme) => ({
  logo: {
    height: 50,
    width: '40%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    objectFit: 'cover'
  },
  title: {
    fontFamily: "Neue Haas Grotesk Display Pro",
    fontStyle: "normal !important",
    fontWeight: "900 !important",
    fontSize: "32.5271px !important",
    lineHeight: "43px !important",
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent"
  },
  termsandcondition: {
    letterSpacing: "00.01px",
  },
  Crateaccountbutton: {
    background:
      "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
    fontFamily: "Neue Haas Grotesk Display Pro",
    width: "60%",
    textTransform: "none",
  },
}));

export { globalStyles };