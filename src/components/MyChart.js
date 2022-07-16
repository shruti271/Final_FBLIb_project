import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { date } from "yup";

const MyChart = (props) => {
    // console.log(props.chartData?.map((a)=>a.date))
    const option = {
      chart: {
        height: props.graphHeight,
        zoomType: "x",        
      },
      title: {
        text: "",
        align: "left",
        style: {
          fontSize: ".875rem",
          fontWeight: "bold",
          letterSpacing: "0.02em",
        },
      },
      subtitle: {
        text: "",
      },
      credits: {
        enabled: false,
      },
   
      xAxis: {
        visible:props.axisVisiblity,
        // type: "datetime",
        labels: {
            format: "{value:%b - %e}",
          },
        categories:props.chartData?.map((a)=>a.date)
        // categories:['2-3-2022','5-3-2022']
      },
      yAxis: {    
        visible:props.axisVisiblity,    
        title: {
          text: "",
        },
        labels: {
          formatter: function () {
            return this.value ;
          },
        },
      },
      legend: {
        enabled: props.dataBoxVisiblity,        
        align: "right",
        verticalAlign: "top",
        padding: 0,
  
        itemStyle: {
          lineHeight: "14px",
        },
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              color:
              "linear-gradient(360deg, rgba(181, 237, 255, 0.3) 0.17%, rgba(0, 203, 255, 0.6) 28.76%, rgba(103, 33, 255, 0.8) 85.95%)",
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
                [0.3, "rgba(103, 33, 255, 0.8 )"],
                [0.6, "rgba(0, 203, 255, 0.4)"],
                [0.8, "rgba(181, 237, 255, 0.3)"],
            ],
          },
  
          lineWidth: 6,
        //   color:"white",
        //   lineTension: 0.2,
          states: {
            hover: {
              lineWidth: 6,
            },
          },
          threshold: null,
        },      
      },
   
      series: [
        {
          type: props.fillType,
          name: "No of ads",
          data: props.chartData?.map((a)=>a.noOfCopyAds),
        // data:[2,5,7,8,34,45,56,78,89,80,80,],
        //   color: "blue",
        datalable:{},
        // lineTension: 1,
        marker: {
            fillColor: '#FFFFFF',
            lineWidth: 3,            
            lineColor: "black", // inherit from series            
            radius: 5,            
        },
          color: {
            linearGradient: {
                color:
                "linear-gradient(360deg, rgba(181, 237, 255, 0.3) 0.17%, rgba(0, 203, 255, 0.6) 28.76%, rgba(103, 33, 255, 0.8) 85.95%)",
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
              },
            stops: [
                [0.3, "rgba(181, 237, 255, 0.3)"],
                [0.6, "rgba(0, 203, 255, 0.6)"],
                [0.8, "rgba(103, 33, 255, 0.8)"],
            ]
        },
        tooltip: {
          // nullFormat: 'Value is not available.',
          // backgroundColor: '#fff',
          hideDelay:"0.5",
      }
        //   series: {
        //     color: 'yellow'
        // }
        //   pointStart: Date.UTC(2010, 0, 1),
        //   pointInterval: 0.5,        
        },
      ],
    };
    return (
      <>
        <HighchartsReact highcharts={Highcharts} options={option}/>
      </>
    );
  };
  
  

  export default  MyChart;
  