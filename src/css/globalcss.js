import { createTheme, } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import { InputBase } from "@mui/material";
import { styled, } from '@mui/material/styles';
import { alpha} from "@mui/system";
export const themeLight = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
            body: { backgroundColor: "#002838 !important" },
            // body: {  background:"#002838"}
      },
    },
  },
});

const globalStyles = makeStyles((theme) => ({
  logo: {
    height: 39,
    width: 280,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    objectFit: 'cover',
    cursor:"pointer",
    display:"flex",
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
    [theme.breakpoints.down('sm')]: {
      alignSelf: "flex-start",
      padding:"0px 4px 0px 10px !important",
    },
  },
  Crateaccountbutton: {
    background:
      // "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
      " linear-gradient(45deg, #00CBFF 0%, #72E2FF 100%)",
    fontFamily: "Neue Haas Grotesk Display Pro",
    width: 400,
    textTransform: "none",
  },
  inputField: {
    border: "1px solid #ced4da",
    borderRadius: "10px",
    paddingLeft: "10px",
    height: "48px",
    // marginBottom:"10px"
  },    
}));

export { globalStyles };
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '12px 10px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
export { BootstrapInput };