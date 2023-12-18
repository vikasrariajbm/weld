// import ReactApexChart from "react-apexcharts";
// export default function Downtime_Chart() {
//   const data = [
//     { y: 15, label: "MTBF" },
//     { y: 55, label: "MTTR" },
//     { y: 30, label: "Machine Breakdown" },
//   ];
//   const series = [55, 30, 15];
//   const options = {
//     chart: {
//       // width: 200,
//       type: "pie",
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     legend: {
//       show: true,
//       position: "bottom",
//       horizontalAlign: "center",
//       floating: false,
//       itemMargin: {
//         horizontal: 12,
//         vertical: 5,
//       },
//     },
//     labels: ["MTTR", "MTBF", "Machine Breakdown"],
//   };

//   return (
//     <ReactApexChart
//       options={options}
//       series={series}
//       type="pie"
//       width={330}
//       height={300}
//     />
//   );
// }

import React from "react";
import ReactApexChart from "react-apexcharts";
export default function Downtime_Chart() {
  const series = [
    {
      name: "MTBF",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "MTTR",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Machine Breakdown",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    legend: {
      show: true,
      itemMargin: {
        horizontal: 18,
        vertical: 10,
      },
    },
    xaxis: {
      type: "datetime",

      categories: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  // const options = {
  //   chart: {
  //     height: 400,
  //     type: "line",
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  //   colors: ["#2E93fA", "#66DA26", "#546E7A"],
  //   stroke: {
  //     show: true,
  //     width: [0, 2],
  //     curve: "smooth",
  //   },
  //   legend: {
  //     show: true,
  //     itemMargin: {
  //       horizontal: 18,
  //       vertical: 10,
  //     },
  //   },
  //   dataLabels: {
  //     enabled: true,
  //     enabledOnSeries: [2],
  //     textAnchor: "middle",
  //     distributed: false,
  //     offsetX: 0,
  //     offsetY: 0,
  //     background: {
  //       enabled: true,
  //       foreColor: "#fff",
  //       padding: 4,
  //       borderRadius: 2,
  //       borderWidth: 0.4,
  //       borderColor: "#fff",
  //       opacity: 0.9,
  //       // dropShadow: {
  //       //   enabled: true,
  //       //   top: 1,
  //       //   left: 1,
  //       //   blur: 1,
  //       //   color: "#000",
  //       //   opacity: 0.45,
  //       // },
  //     },
  //   },
  //   labels: [
  //     "01 Jan 2001",
  //     "02 Jan 2001",
  //     "03 Jan 2001",
  //     "04 Jan 2001",
  //     "05 Jan 2001",
  //     "06 Jan 2001",
  //     "07 Jan 2001",
  //     "08 Jan 2001",
  //     "09 Jan 2001",
  //   ],
  //   xaxis: {
  //     type: "datetime",
  //   },
  //   yaxis: [],
  // };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={280} />
  );
}
