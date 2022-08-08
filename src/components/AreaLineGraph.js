import React from "react";
import ApexCharts from "apexcharts";
import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";
// import DummyGraph from "./DummyGraph";

const AreaLineGraph=()=>   {
  var options = {

    chart: {
      height: 180,
      type: "area",
      toolbar: {
        show: false,
      },
      // sparkline: {
      //   enabled: false
      // }
    },
    dataLabels: {
      enabled: false,
    },
    // series: [
    //   {
    //     name: "Series 1",
    //     data: [45, 45, 45, 45, 45, 45, 45],
    //   },
    // ],
    fill: {
      type: "gradient",
    
      gradient: {
       type:"horizontal",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        inverseColors: true,
        // gradientToColors: [ 'rgba(181, 237, 255, 0.45)',"rgba(0, 203, 255, 0.45)",],
        // stops: [0, 90, 100] linear-gradient(270deg, rgba(181, 237, 255, 0.45) 0%, rgba(0, 203, 255, 0.45) 27.78%, rgba(103, 33, 255, 0.45) 104.56%)
        colorStops: [
          {
            offset: 0,
            color: "rgba(181, 237, 255, 0.45)",
            opacity: 1,
          },
          {
            offset: 27,
            color: "rgba(0, 203, 255, 0.45)",
            opacity: 1,
          },
          {
            offset: 104,
            color: "rgba(103, 33, 255, 0.45)",
            opacity: 1,
          },
        ],
      },
    
    },

    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",           
      colors: [                          
        "rgba(103, 33, 255, 0.2)",
        "rgba(0, 203, 255, 0.45)",
        "rgba(181, 237, 255, 0.45)",
      ],
            
      width: 5,
      dashArray: 0,
    },
    markers: {
      strokeColors: "black",
      colors: "white",
      strokeWidth: 2,
      radius: 2,
    },
    legend: {
      show: false,
    },

    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
      ],
    },
  };
  var series= [{
    name: 'series1',
    data: [45, 45, 45, 45, 45, 45, 45],
  }];

  // var chart = new ApexCharts(document.querySelector("#chart"), options);
  // chart.render();
  return (
    <>
    {/* <ApexCharts options={options}/> */}
      <Box id="chart"> </Box>
      <ReactApexChart type="area" series={series} options={options} height="400px"/> 
      
    </>
  );
}

export default AreaLineGraph;
