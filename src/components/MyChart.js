import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { date } from "yup";

const MyChart = (props) => {
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
        caregory:props.chartData?.map((a)=>a.date)
      },
      yAxis: {
        title: {
          text: "",
        },
        labels: {
          formatter: function () {
            return this.value / 1000 + "%";
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
                "linear-gradient(180deg, rgba(250, 177, 67, 0) 0%, rgba(250, 177, 67, 0.2) 100%)",
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, "#0070C0"],
              [1, "#FFFFFF"],
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
          data: [
            null,
            null,
            null,
            null,
            null,
            6,
            11,
            32,
            110,
            235,
            369,
            640,
            1005,
            1436,
            2063,
            3057,
            4618,
            6444,
            9822,
            15468,
            20434,
            24126,
            27387,
            29459,
            31056,
            31982,
            32040,
            31233,
            29224,
            27342,
            26662,
            26956,
            27912,
            28999,
            28965,
            27826,
            25579,
            25722,
            24826,
            24605,
            24304,
            23464,
            23708,
            24099,
            24357,
            24237,
            24401,
            24344,
            23586,
            22380,
            21004,
            17287,
            14747,
            13076,
            12555,
            12144,
            11009,
            10950,
            10871,
            10824,
            10577,
            10527,
            10475,
            10421,
            10358,
            10295,
            10104,
            9914,
            9620,
            9326,
            5113,
            5113,
            4954,
            4804,
            4761,
            4717,
            4368,
            4018,
          ],
          color: "#0070C0",
          pointStart: Date.UTC(2010, 0, 1),
          pointInterval: 3600 * 1000 * 12,
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
  