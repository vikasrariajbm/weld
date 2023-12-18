import ReactApexChart from "react-apexcharts";
export default function Voltage_chart() {
  const series = [
    {
      name: "Availibility",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: "Performance",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: "Quality",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
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
      width: [1, 1, 2],
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
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
      ],
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
