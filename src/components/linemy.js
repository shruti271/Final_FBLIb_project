import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { date } from "yup";

const MyCharttt = (props) => {
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
                // [0.3, "rgba(103, 33, 255, 0.8 )"],
                // [0.6, "rgba(0, 203, 255, 0.4)"],
                // [0.8, "rgba(103, 33, 255, 0.3)"],
                [0, " #B5EDFF"],
                [0.3, "#00CBFF"],
                [0.8, "#6721FF"],
                [0.104,"#C8BDFF"]
            ],
          },
  
          lineWidth: 9,
        //   color:"white",
        //   lineTension: 0.2,
          states: {
            hover: {
              lineWidth: 10,
            },
          },
          threshold: null,
        },      
      },
   
      series: [
        {
          type:"line",// props.fillType,
          name: "No of ads",
          data: props.chartData?.map((a)=>a.noOfCopyAds),
          lineWidth: 7,
        // data:[2,5,7,8,34,45,56,80,0,10,89,78,89,56],
        //   color: "blue",
        datalable:{},
        // lineTension: 1,
        marker: {
            fillColor: '#FFFFFF',
            lineWidth: 1,            
            lineColor: "black", // inherit from series            
            radius: 5,            
        },
          color: {
            linearGradient: {
                color:
                "linear-gradient(270deg, #B5EDFF 0%, #00CBFF 29.96%, #6721FF 89.87%, #C8BDFF 104.58%)",
                x1: 1,
                y1: 1,
                x2: 0,
                y2: 1,
              },
            stops: [
                [0.1, "#B5EDFF"],
                [0.5, "#00CBFF"],
                [0.8, "#6721FF"],
                // [0.9,"#C8BDFF"]
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
  
  

  export default  MyCharttt;
  