import React from "react";
import ReactApexChart from "react-apexcharts";
import { dummyDataGen } from "../../Current/test";
export default function Planned_Vs_Actual_Chart() {
  const data = dummyDataGen(30);
  const timestamps = data.map((t) => {
    return t.timestamp;
  });

  const availibility = data.map((t) => {
    return t.a;
  });

  const performance = data.map((t) => {
    return t.b;
  });

  const quality = data.map((t) => {
    return t.c;
  });
  const series = [
    {
      name: "Availibilty",
      type: "column",
      data: availibility,
    },
    {
      name: "Performance",
      type: "column",
      data: performance,
    },
    {
      name: "Quality",
      type: "column",
      data: quality,
    },
    {
      name: "Overall OEE",
      type: "line",
      data: performance,
    },
  ];
  const options = {
    chart: {
      height: 400,
      type: "line",
      toolbar: {
        show: true,
      },
    },
    colors: ["#2E93fA", "#66DA26", "#546E7A"],
    stroke: {
      show: true,
      width: [0, 2],
      curve: "smooth",
    },
    legend: {
      show: true,
      itemMargin: {
        horizontal: 18,
        vertical: 10,
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [3],
      textAnchor: "middle",
      distributed: false,
      offsetX: 0,
      offsetY: 0,
      background: {
        enabled: true,
        foreColor: "#fff",
        padding: 4,
        borderRadius: 2,
        borderWidth: 0.4,
        borderColor: "#fff",
        opacity: 0.9,
        // dropShadow: {
        //   enabled: true,
        //   top: 1,
        //   left: 1,
        //   blur: 1,
        //   color: "#000",
        //   opacity: 0.45,
        // },
      },
    },
    labels: timestamps,
    xaxis: {
      type: "datetime",
    },
    yaxis: [],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={360}
    />
  );
}

////////******Planned_Vs_Actual_Chart COMPONENT WITHOUT LINE CHART*******///////
// import React from "react";
// import ReactApexChart from "react-apexcharts";

// export default function Planned_Vs_Actual_Chart() {
//   const series = [
//     {
//       name: "Availibilty",
//       type: "bar",
//       data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
//     },
//     {
//       name: "Performance",
//       type: "bar",
//       data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
//     },
//     {
//       name: "Quality",
//       type: "bar",
//       data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
//     },
//     {
//       name: "Revenue",
//       type: "line",
//       data: [20, 29, 37, 36, 44, 45, 50, 58],
//     },
//   ];

//   const options = {
//     chart: {
//       // type: "bar",
//       height: 400,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "75%",
//         endingShape: "rounded",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 2,
//       colors: ["transparent"],
//     },
//     xaxis: {
//       categories: [
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//       ],
//     },
//     yaxis: {},
//     fill: {
//       opacity: 1,
//     },
//     // tooltip: {
//     //   y: {
//     //     formatter: function (val) {
//     //       return "$ " + val + " thousands";
//     //     },
//     //   },
//     // },
//   };

//   return (
//     <ReactApexChart
//       options={options}
//       series={series}
//       type="line"
//       height={400}
//     />
//   );
// }

////////******Planned_Vs_Actual_Chart CANVAS JS COMPONENT*******////
// import React from "react";
// import CanvasJSReact from "@canvasjs/react-charts";
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// export default function BarChart() {
//   const options = {
//     animationEnabled: true,
//     backgroundColor: "transparent",
//     // exportEnabled: true,
//     theme: "light2", //"light1", "dark1", "dark2"
//     axisY: {
//       includeZero: true,
//     },
//     data: [
//       {
//         type: "column", //change type to bar, line, area, pie, etc
//         //indexLabel: "{y}", //Shows y value on all Data Points
//         indexLabelFontColor: "#5A5757",
//         indexLabelPlacement: "outside",
//         dataPoints: [
//           { x: 10, y: 71 },
//           { x: 20, y: 55 },
//           { x: 30, y: 100 },
//           { x: 40, y: 65 },
//           { x: 50, y: 21 },
//           { x: 60, y: 68 },
//           { x: 70, y: 38 },
//         ],
//       },
//       {
//         type: "column", //change type to bar, line, area, pie, etc
//         //indexLabel: "{y}", //Shows y value on all Data Points
//         indexLabelFontColor: "#5A5757",
//         indexLabelPlacement: "outside",
//         dataPoints: [
//           { x: 10, y: 21 },
//           { x: 20, y: 65 },
//           { x: 30, y: 30 },
//           { x: 40, y: 65 },
//           { x: 50, y: 41 },
//           { x: 60, y: 38 },
//           { x: 70, y: 68 },
//         ],
//       },
//       {
//         type: "column", //change type to bar, line, area, pie, etc
//         //indexLabel: "{y}", //Shows y value on all Data Points
//         indexLabelFontColor: "#5A5757",
//         indexLabelPlacement: "outside",
//         dataPoints: [
//           { x: 10, y: 71 },
//           { x: 20, y: 95 },
//           { x: 30, y: 70 },
//           { x: 40, y: 25 },
//           { x: 50, y: 91 },
//           { x: 60, y: 38 },
//           { x: 70, y: 98 },
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
