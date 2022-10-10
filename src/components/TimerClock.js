import { makeStyles, useMediaQuery } from "@material-ui/core";
import { Divider, Stack, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { updateScubsciptionStatus } from "../redux/ducks/subscription";
const useStyles = makeStyles((theme) => ({
  DisplayBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function convertUTCDateToLocalDate(date) {
  // var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  // var offset = date.getTimezoneOffset() / 60;
  // var hours = date.getHours();

  // newDate.setHours(hours - offset);

  // return newDate;
  var newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
  return newDate; 
}

function TimerClock() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const showgrid = useMediaQuery(theme.breakpoints.only("xs"));

  const { trial_end_date } = useSelector(
    (state) => state.subscriptionData.data
  );

  return (
    <Box sx={{mt:showgrid && 1,}}>
      {trial_end_date && (
        <>
          <Typography style={{ fontWeight: "bold" }}>
            Trial will be expired after
          </Typography>

          <Countdown
            date={convertUTCDateToLocalDate(new Date(trial_end_date)).getTime()}
            // date={new Date(trial_end_date).getTime()}            
            autoStart="true"
            onComplete={() => {
              dispatch(
                updateScubsciptionStatus({
                  trial_end_date: "",
                  status: "Inactive",
                })
              );
            }}
            renderer={(props) => (
              <div style={{ color: "black"}}>
                <Stack
                  direction={"row"}
                  spacing={showgrid?1:3}
                  className={classes.DisplayBox}
                >
                  <Stack className={classes.DisplayBox}>
                    <Typography style={{ fontWeight: "bold" }}>
                      {props.days}
                    </Typography>
                    Days
                  </Stack>
                  <Divider
                    orientation="vertical"
                    sx={{ marginLeft: "auto", height: "20px" }}
                  />
                  <Stack className={classes.DisplayBox}>
                    <Typography style={{ fontWeight: "bold" }}>
                      {props.hours}
                    </Typography>
                    Hours
                  </Stack>

                  <Divider
                    orientation="vertical"
                    sx={{ marginLeft: "auto", height: "20px" }}
                  />

                  <Stack className={classes.DisplayBox}>
                    <Typography style={{ fontWeight: "bold" }}>
                      {props.minutes}
                    </Typography>
                    Minutes
                  </Stack>

                  <Divider
                    orientation="vertical"
                    sx={{
                      marginLeft: "auto",
                      height: "20px",
                    }}
                  />

                  <Stack className={classes.DisplayBox}>
                    <Typography style={{ fontWeight: "bold" }}>
                      {props.seconds}
                    </Typography>
                    Seconds
                  </Stack>
                </Stack>
              </div>
            )}
          />
        </>
      )}
    </Box>
  );
}

export default TimerClock;
