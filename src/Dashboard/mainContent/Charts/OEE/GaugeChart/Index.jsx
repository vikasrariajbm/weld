import React from "react";
import ReactApexChart from "react-apexcharts";

export default function GaugeChart({ chartLabel, chartValue }) {
  const options = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
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
    // labels: [chartLabel],
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
          height={150}
        />
      </div>
    </div>
  );
}
