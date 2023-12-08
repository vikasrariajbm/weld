// import CanvasJSReact from "@canvasjs/react-charts";
// import React from "react";
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// export default function Quality_chart() {
//   const options = {
//     animationEnabled: true,
//     backgroundColor: "transparent",
//     data: [
//       {
//         type: "doughnut",
//         startAngle: 270,
//         radius: "80%",
//         innerRadius: "60%",
//         showInLegend: true,
//         yValueFormatString: "#,###'%'",
//         dataPoints: [
//           { name: "Ok Part", y: 75 },
//           { name: "Rejection Part", y: 15 },
//           { name: "Rework Part", y: 10 },
//         ],
//       },
//     ],
//   };
//   return (
//     <React.Fragment>
//       <div className="quality_chart_container">
//         <CanvasJSChart options={options} />
//       </div>
//     </React.Fragment>
//   );
// }

import ReactApexChart from "react-apexcharts";
export default function Quality_chart() {
  const series = [35, 50, 15];
  const options = {
    chart: {
      // width: 200,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    subtitle: {
      text: "Quality",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "16px",
        fontWeight: 800,
        fontFamily: undefined,
        color: "gray",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      itemMargin: {
        horizontal: 8,
        vertical: 5,
      },
    },
    labels: ["Ok Part", "Recycle Part", "Rework Part"],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      width={350}
    />
  );
}
