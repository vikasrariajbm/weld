import React from "react";
import OeeChart from "../Charts/OEE/Index";
import Planned_Vs_Actual_Chart from "../Charts/PlannedVsActual/Index";
import Quality_chart from "../Charts/Quality/Index";
import Downtime_Chart from "../Charts/Downtime/Index";
import LoadingSpinner from "../LoadingSpinner/Index";
import TitleBar from "../Charts/TitleBar";
import Stats_Card from "../statsCards/Index";
import SampleLogo from "../../../Logo";
import Current_chart from "../Charts/Current/Index";
import Voltage_chart from "../Charts/Voltage/Index";

export default function Machine_wise_view_screen({ isLoading }) {
  const data = [
    { y: 15, label: "MTBF" },
    { y: 55, label: "MTTR" },
    { y: 30, label: "Machine Breakdown" },
  ];
  return (
    <div className={isLoading ? "blur" : ""}>
      {isLoading && <LoadingSpinner />}
      <div className="dashboard_stats_container">
        <Stats_Card
          cardIcon={<SampleLogo />}
          cardTitle="Production Count"
          cardValue={25}
          unit={false}
        />
        <Stats_Card
          cardIcon={<SampleLogo />}
          cardTitle="Gas Consumed"
          cardValue={90}
          unit={"%"}
        />
        <Stats_Card
          cardIcon={<SampleLogo />}
          cardTitle="Energy Consumed"
          cardValue={43}
          unit={"%"}
        />
        <Stats_Card
          cardIcon={<SampleLogo />}
          cardTitle="Wire Consumed"
          cardValue={127}
          unit={"gm"}
        />
        <Stats_Card
          cardIcon={<SampleLogo />}
          cardTitle="Part/ ManDays"
          cardValue={78}
          unit={false}
        />
      </div>
      <div className="machine_charts_container">
        <div className="current_chart machine_chart_container">
          <div>
            <TitleBar titleValue="Current" />
          </div>
          <div>
            <Current_chart />
          </div>
        </div>
        <div className="voltage_chart machine_chart_container">
          <div>
            <TitleBar titleValue="Voltage" />
          </div>
          <div>
            <Voltage_chart />
          </div>
        </div>
      </div>
    </div>
  );
}
