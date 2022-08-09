import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  inputField: {
    border: "2px solid #EBEBEB",
    borderRadius: "10px",
    paddingLeft: "16px",
    height: "43px",
  },
  avtar: {
    background: 'linear-gradient(220deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)',
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
}));

export default useStyles;
