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
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
      itemMargin: {
        horizontal: 18,
        vertical: 10,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "37%",
        endingShape: "rounded",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      title: {
        text: "Nomenclature of Presses",
      },
      categories: ["Actual ", "Ideal", "Plan"],
    },

    yaxis: {
      title: {
        text: "Avg, Strokes Per Day (x1000)",
      },
      // min: 0,
      // tickAmount: 5,
    },
    fill: {
      opacity: 1,
    },
  };
  return (
    <ReactApexChart options={options} series={series} type="bar" height={340} />
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
