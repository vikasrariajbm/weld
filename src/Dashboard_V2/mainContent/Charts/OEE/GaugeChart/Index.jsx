import React from "react";
import ReactApexChart from "react-apexcharts";

export default function GaugeChart({ chartLabel, chartValue, chartColor }) {
  const options = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    colors: [chartColor],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%",
          background: "transparent",
        },
        dataLabels: {
          name: {
            color: "transparent",
            offsetY: -10,
            fontSize: "10px",
          },
          value: {
            color: "transparent",
            fontSize: "10px",
          },
        },
      },
    },
    fill: {
      type: "solid",
    },
    stroke: {
      lineCap: "round",
    },
  };

  const series = [chartValue];

  return (
    <div className="gauge_chart_container">
      <div className="gauge_chart_label_container ">
        <div className="label_container">{chartLabel}</div>
        <div>
          {chartValue} <span className="unit_container">%</span>
        </div>
      </div>
      <div className="gauge_chart_bar_container">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={140}
        />
      </div>
    </div>
  );
}
