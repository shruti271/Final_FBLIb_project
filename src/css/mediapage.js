import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  titleHome: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  sendbutton: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  inputField: {
    border: "2px solid #EBEBEB",
    borderRadius: "10px",
    paddingLeft: "16px",
    height: "43px",
  },
  avtar: {
    background:
      " linear-gradient(45deg, #00CBFF 0%, #72E2FF 100%)",
    width: "34px",
    height: "34px",
    padding: "10px",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  multilineinput: {
    border: "2px solid #EBEBEB",
    borderRadius: "10px",
    height: "264px",
    paddingLeft: "16px !important",
  },
  AdsImageVideo: {
    width: "100%",
    height: "auto",
    padding: "0",
    margin: "0",
    overflowY: "none",
    outline: "none",
  },
  profileItem: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  headingtextcenter: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  currentpassword: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

export default useStyles;
