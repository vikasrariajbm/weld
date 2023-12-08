import React from "react";
import ReactApexChart from "react-apexcharts";

export default function Planned_Vs_Actual_Chart() {
  const series = [
    {
      name: "Net Profit",
      data: [40, 55, 17],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 400,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "37%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr"],
    },
    yaxis: {
      title: {
        text: "Avg, Strokes Per Day (x1000)",
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={400} />
  );
}

// import React from "react";
// import CanvasJSReact from "@canvasjs/react-charts";
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// export default function Planned_Vs_Actual_Chart() {
//   const options = {
//     animationEnabled: true,
//     // exportEnabled: true,
//     theme: "light2", //"light1", "dark1", "dark2"
//     axisY: {
//       includeZero: true,
//     },
//     data: [
//       {
//         type: "column",
//         indexLabelFontColor: "#5A5757",
//         indexLabelPlacement: "outside",
//         dataPoints: [
//           { x: 1, y: 41 },
//           { x: 2, y: 85 },
//           { x: 3, y: 20 },
//         ],
//       },
//     ],
//   };
//   return (
//     <React.Fragment>
//       <CanvasJSChart
//         options={options}
//         /* onRef={ref => this.chart = ref} */
//         /* containerProps={{ width: '100%', height: '300px' }} */
//       />
//     </React.Fragment>
//   );
// }
