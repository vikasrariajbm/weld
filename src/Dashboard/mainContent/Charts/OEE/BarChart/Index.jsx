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
import React from "react";
import ReactApexChart from "react-apexcharts";
export default class Planned_Vs_Actual_Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: "Social Media",
          type: "line",
          data: [230, 42, 35, 27, 43, 262, 17, 31, 242, 22, 102, 16],
        },
      ],
      options: {
        chart: {
          height: 400,
          type: "line",
        },
        stroke: {
          width: [0, 4],
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        labels: [
          "01 Jan 2001",
          "02 Jan 2001",
          "03 Jan 2001",
          "04 Jan 2001",
          "05 Jan 2001",
          "06 Jan 2001",
          "07 Jan 2001",
          "08 Jan 2001",
          "09 Jan 2001",
          "10 Jan 2001",
          "11 Jan 2001",
          "12 Jan 2001",
        ],
        xaxis: {
          type: "datetime",
        },
        yaxis: [
          {
            opposite: false,
          },
        ],
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="line"
        height={400}
      />
    );
  }
}
