import { makeStyles } from "@material-ui/core";
import { Divider, Stack, Typography } from "@mui/material";
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

function TimerClock() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { trial_end_date } = useSelector(
    (state) => state.subscriptionData.data
  );

  return (
    <Box>
     
      {trial_end_date && (
         <>
         <Typography style={{ fontWeight: "bold" }}>
         Trial will be expired after
       </Typography>
         
         

        <Countdown
          date={new Date(trial_end_date)}
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
            <div style={{ color: "black" }}>
              <Stack
                direction={"row"}
                spacing={3}
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
