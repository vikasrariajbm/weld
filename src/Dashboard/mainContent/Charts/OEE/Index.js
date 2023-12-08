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
          <GaugeChart chartLabel="Availibility" chartValue={91.77} />
        </div>
        <div className="col-sm-12">
          <GaugeChart chartLabel="Performance" chartValue={92.72} />
        </div>
        <div className="col-sm-12">
          <GaugeChart chartLabel="Quality" chartValue={74.57} />
        </div>
      </div>
    </div>
  );
}
