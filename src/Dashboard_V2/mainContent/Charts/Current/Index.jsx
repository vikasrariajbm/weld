import ReactApexChart from "react-apexcharts";
import { dummyDataGen } from "./test";
export default function Current_chart() {
  const data = dummyDataGen(500);
  const timestamps = data.map((t) => {
    return t.timestamp;
  });

  const availibility = data.map((t) => {
    return t.a;
  });

  const performance = data.map((t) => {
    return 0;
  });

  const quality = data.map((t) => {
    return 0;
  });

  const series = [
    {
      name: "Availibility",
      data: availibility,
    },
    {
      name: "Performance",
      data: performance,
    },
    {
      name: "Quality",
      data: quality,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
    },
    legend: {
      show: true,
      itemMargin: {
        horizontal: 18,
        vertical: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 2, 1],
      curve: "straight",
      //   dashArray: [0, 8, 5],
    },
    // legend: {
    //   tooltipHoverFormatter: function (val, opts) {
    //     return (
    //       val +
    //       " - " +
    //       opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
    //       ""
    //     );
    //   },
    // },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: timestamps,
      type: "datetime",
    },
    // tooltip: {
    //   y: [
    //     {
    //       title: {
    //         formatter: function (val) {
    //           return val + " (mins)";
    //         },
    //       },
    //     },
    //     {
    //       title: {
    //         formatter: function (val) {
    //           return val + " per session";
    //         },
    //       },
    //     },
    //     {
    //       title: {
    //         formatter: function (val) {
    //           return val;
    //         },
    //       },
    //     },
    //   ],
    // },
    grid: {
      borderColor: "#f1f1f1",
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />
  );
}
