import ReactApexChart from "react-apexcharts";
export default function Quality_chart() {
  const series = [35, 50, 15];
  const options = {
    chart: {
      // width: 400,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
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
      width={230}
      height={340}
    />
  );
}
