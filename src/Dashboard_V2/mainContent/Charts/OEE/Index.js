import React from "react";
import GaugeChart from "./GaugeChart/Index";
import BarChart from "./BarChart/Index";

export default function OeeChart() {
  return (
    <div className="oee_chart_container">
      <div className="oee_bar_chart_container">
        <BarChart />
      </div>
      <div className="oee_gauge_chart_container">
        <div className="col-sm-12">
          <GaugeChart
            chartLabel="Availibility"
            chartValue={91.77}
            chartColor="#2E93fA"
          />
        </div>
        <div className="col-sm-12">
          <GaugeChart
            chartLabel="Performance"
            chartValue={92.72}
            chartColor="#66DA26"
          />
        </div>
        <div className="col-sm-12">
          <GaugeChart
            chartLabel="Quality"
            chartValue={74.57}
            chartColor="#546E7A"
          />
        </div>
      </div>
    </div>
  );
}
