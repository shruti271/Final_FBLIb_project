import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const SplineAreaGraph = (props) => {
  const option = {
    chart: {
      height: props.graphHeight,
      zoomType: "x",
      spacingLeft: 0,
    },
    title: {
      align: "left",
      style: {
        fontSize: ".875rem",
        fontWeight: "bold",
        letterSpacing: "0.02em",
      },
    },

    credits: {
      enabled: false,
    },

    xAxis: {
      maxPadding: 0,
      gridLineWidth: 1,
      showEmpty: false,
      visible: props.axisVisiblity,
      type: "datetime",
      labels: {
        format: "{value:%b - %e}",
      },
      categories: [...props.chartData?.map((a) => a.date)].slice(-30),
    },
    yAxis: {
      gridLineWidth: 0,
      visible: props.axisVisiblity,
      title: {
        text: "",
      },
      labels: {
        formatter: function () {
          return this.value;
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
      areaspline: {
        lineColor: "#00CBFF",
      },
    },

    series: [
      {
        type: "areaspline",
        name: "No of ads",
        data: [...props.chartData?.map((a) => a.noOfCopyAds)].slice(-30),
        // data:[23,46,3,45,34,12,67,24,56,45,6],
        lineWidth: 4,
        marker: {
          enabled: false,
          fillColor: "white",
          lineWidth: 2,
          lineColor: "#00CBFF",
          radius: 5,
        },
        color: {
          linearGradient: {
            color:
              "linear-gradient(180deg, rgba(0, 203, 255, 0.5) 0%, rgba(0, 203, 255, 0) 100%)",
            x1: 1,
            y1: 0,
            x2: 1,
            y2: 1,
          },
          stops: [
            [0, "rgba(0, 203, 255, 0.5)"],
            [1, "rgba(0, 203, 255, 0)"],
          ],
        },

        tooltip: {
          hideDelay: "0.5",
        },
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={option} />
    </>
  );
};

export default SplineAreaGraph;
