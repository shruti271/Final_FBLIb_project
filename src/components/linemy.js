import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const MyChart = (props) => {    
    // const dateobj = Array(30).fill(0);
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
        categories:[...props.chartData?.map((a)=>a.date)].slice(-30)       
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
        areaspline: {          
          lineColor: {
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
          ]
          },
          
        },
       
      },
     
      series: [
        {          
          type:"areaspline",// props.fillType,
          name: "No of ads",            
           data:[...props.chartData?.map((a)=>a.noOfCopyAds)].slice(-30),
          lineWidth: 7,
                         
        lineTension: 1,
        marker: {
          enabled: false,
            fillColor: '#FFFFFF',
            lineWidth: 3,             
            lineColor: "black", // inherit from series            
            radius: 5,    
                    
        },
          color: {
            linearGradient: {
                color:
                "linear-gradient(270deg, rgba(181, 237, 255, 0.45) 0%, rgba(0, 203, 255, 0.45) 27.78%, rgba(103, 33, 255, 0.45) 104.56%)",
                x1: 1,
                y1: 1,
                x2: 0,
                y2: 1,
              },
            stops: [
              [0.1, "rgba(181, 237, 255, 0.45)"],
                [0.5, "rgba(0, 203, 255, 0.45)"],
                [0.8, "rgba(103, 33, 255, 0.45)"], 
                // [0.1, "#B5EDFF"],
                // [0.5, "#00CBFF"],
                // [0.8, "#6721FF"],                
            ]
        },
        
        tooltip: {                   
          hideDelay:"0.5",
      }
    
        //   pointInterval: 0.5,        
        },
      ],
    };
    // useEffect(()=>{
    //  let abc= [
    //     "1-3",
    //     "2-3",
    //     "3-3",
    //     "4-3",
    //     "5-3",
    //     "6-3",
    //     "7-3",
    //     "8-3",
    //     "9-3",
    //     "10-3",
    //     "11-3",
    //     "12-3",
    //     "13-3",
    //     "14-3",
    //     "15-3",
    //     "16-3",
    //     "17-3",
    //     "18-3",
    //     "19-3",
    //     "20-3",
    //     "21-3",
    //     "22-3",
    //     "23-3",
    //     "24-3",
    //     "25-3",
    //     "26-3",
    //     "27-3",
    //     "28-3",
    //     "29-3",
    //     "30-3",
    //     "1-4",
    //     "2-4",
    //     "3-4",
    //     "4-4",
    //     "5-4",
    //   ].slice(-3);
    //   dateobj.splice(0,abc.length-1,...abc);
    //   console.log("@@@",dateobj)
    // },[])
    return (
      <>
        <HighchartsReact highcharts={Highcharts} options={option}/>
      </>
    );
  };
  
  

  export default  MyChart;
  