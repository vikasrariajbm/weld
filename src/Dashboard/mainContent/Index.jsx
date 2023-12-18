import React from "react";
import OeeChart from "./Charts/OEE/Index";
import Planned_Vs_Actual_Chart from "./Charts/PlannedVsActual/Index";
import Quality_chart from "./Charts/Quality/Index";
import Downtime_Chart from "./Charts/Downtime/Index";
import Stats from "./Charts/Stats/Index";
import LoadingSpinner from "./LoadingSpinner/Index";

export default function Dashboard_Main_Container({ isLoading }) {
  const data = [
    { y: 15, label: "MTBF" },
    { y: 55, label: "MTTR" },
    { y: 30, label: "Machine Breakdown" },
  ];
  return (
    <div className={`charts_container ${isLoading ? "blur" : ""}`}>
      {isLoading && <LoadingSpinner />}
      <div className="oee_chart chart_container">
        <OeeChart />
      </div>
      <div className="planned_vs_actual_chart chart_container">
        <Planned_Vs_Actual_Chart />
      </div>
      <div className="stats_container">
        <Stats title="Gas Consumption" value={93} />
        <Stats title="Energy Consumption" value={14} />
        <Stats title="wire Consumption Rate" value={23} />
        <Stats title="Part/Man Days" value={86} />
      </div>
      <div className="downtime_chart bottom_chart_container">
        <div className="downtime_chart_container">
          <div className="downtime_chart_value_container">
            {data.map((item) => {
              return (
                <div className="downtime_label_value_container">
                  <div className="label_container">{item.label}</div>
                  <div className="downtime_value_container">
                    {item.y} <span className="unit_container">%</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="main_chart_container">
            <Downtime_Chart />
          </div>
        </div>
      </div>
      <div className="quality_chart bottom_chart_container">
        <Quality_chart />
      </div>
    </div>
  );
}
