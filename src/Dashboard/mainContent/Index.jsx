import React from "react";
import OeeChart from "./Charts/OEE/Index";
import Planned_Vs_Actual_Chart from "./Charts/PlannedVsActual/Index";
import Quality_chart from "./Charts/Quality/Index";
import Downtime_Chart from "./Charts/Downtime/Index";
import Stats from "./Charts/Stats/Index";

export default function Dashboard_Main_Container() {
  return (
    <div className="charts_container">
      <div className="oee_chart chart_container">
        <OeeChart />
      </div>
      <div className="planned_vs_actual_chart chart_container">
        <Planned_Vs_Actual_Chart />
      </div>
      <div className="stats_container chart_container">
        <Stats title="Gas Consumption" value={93} />
        <Stats title="Energy Consumption" value={14} />
        <Stats title="wire Consumption Rate" value={23} />
        <Stats title="Part/Man Days" value={86} />
      </div>
      <div className="downtime_chart chart_container">
        <Downtime_Chart />
      </div>
      <div className="quality_chart chart_container">
        <Quality_chart />
      </div>
    </div>
  );
}
