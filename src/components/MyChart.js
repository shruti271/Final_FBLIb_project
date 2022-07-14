import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { date } from "yup";

const MyChart = (props) => {
    console.log(props.chartData?.map((a)=>a.date))
    const option = {
      chart: {
        height: "210px",
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
        // type: "datetime",
        // labels: {
        //     format: "{value:%b - %e}",
        //   },
        categories:props.chartData?.map((a)=>a.date)
      },
      yAxis: {
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
        enabled: true,
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
  
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },
  
      series: [
        {
          type: "area",
          name: "Sentiment",
          data: props.chartData?.map((a)=>a.noOfCopyAds),
          color: "#0070C0",
        //   pointStart: Date.UTC(2010, 0, 1),
        //   pointInterval: 0.5,
        },
      ],
    };
    return (
      <>
        <HighchartsReact highcharts={Highcharts} options={option} />
      </>
    );
  };
  
  

  export default  MyChart;
  