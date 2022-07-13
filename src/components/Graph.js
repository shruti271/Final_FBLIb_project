import React, { useEffect } from "react";
import { Chart as ChartJS ,registerables } from "chart.js";
import { Line, } from "react-chartjs-2";
import { Box } from "@mui/system";
ChartJS.register(...registerables );

    // const ctx = document.getElementById('myChart');


    // const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
    // gradient.addColorStop(0, 'rgba(250,174,50,1)');
    // gradient.addColorStop(1, 'rgba(250,174,50,0)');

//     const ctx = document.getElementById('linechart').getContext("2d");
// var gradient = ctx.createLinearGradient(0, 0, 0,300);
// gradient.addColorStop(0, 'rgba(242, 153, 74, 0.5)');   
// gradient.addColorStop(1, 'rgba(242, 153, 74, 0)');
export const  Mychart =({chartData})=>{
 

    const state = {
        labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34"],
        // label:chartData?.map((a)=>a.date),
        datasets: [
          {
              label: 'No of Ads',
            fill: true,
            lineTension: 0.5,
            // backgroundColor: "#00CBFF",
            pointBackgroundColor: "white",
            pointBorderColor: "black",
            borderColor: "rgba(200, 189, 255, 1)",
            pointColor : "#fff",
            // pointStrokeColor : "#ff6c23",
            // pointHighlightFill: "#fff",
            // pointHighlightStroke: "#ff6c23",
            // backgroundColor:" linear-gradient(360deg, rgba(181, 237, 255, 0.3) 0.17%, rgba(0, 203, 255, 0.6) 28.76%, rgba(103, 33, 255, 0.8) 85.95%)",
            // backgroundColor:"rgba(0, 203, 255, 0.5)",           
            borderWidth: 2,
            strokeColor : "#ff6c23",
            color:"white",
            data: chartData?.map((a)=>a.noOfCopyAds),
          },
        ],
      };
    //   useEffect(()=>{
    //     // console.log(Object.values(props.chartData))
    //     console.log("*************************(((((((((((((((((((((((((((((((((((((((((((((")
    //     console.log(chartData)
    //     console.log(chartData?.map((a)=>a.noOfCopyAds===null?0:a.noOfCopyAds))
    //     console.log("*************************")
    //   })
    return (
        <Box width={"100%"}>
         
        <Line id="linechart"
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
            datasetStrokeWidth : 3,
            pointDotStrokeWidth : 4,
            // plotOptions: {
            //     area: {
            //       fillColor: {
            //         linearGradient: {
            //           color:
            //             "linear-gradient(360deg, rgba(181, 237, 255, 0.3) 0.17%, rgba(0, 203, 255, 0.6) 28.76%, rgba(103, 33, 255, 0.8) 85.95%)",
            //           x1: 0,
            //           y1: 0,
            //           x2: 0,
            //           y2: 1,
            //         },
            //         stops: [
            //           [0.3, "rgba(181, 237, 255, 0.3)"],[0.6, "rgba(0, 203, 255, 0.6)"],
            //           [1, "rgba(103, 33, 255, 0.8)"],
            //         ],
            //       },
          
            //       lineWidth: 1,
            //       states: {
            //         hover: {
            //           lineWidth: 1,
            //         },
            //       },
            //       threshold: null,
            //     },
            //   },
         
          }}
        />
     </Box>
    );
  
};
