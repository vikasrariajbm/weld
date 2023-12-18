import React from "react";
import OeeChart from "./Charts/OEE/Index";
import Planned_Vs_Actual_Chart from "./Charts/PlannedVsActual/Index";
import Quality_chart from "./Charts/Quality/Index";
import Downtime_Chart from "./Charts/Downtime/Index";
import LoadingSpinner from "./LoadingSpinner/Index";
import TitleBar from "./Charts/TitleBar";
import Stats_Card from "./statsCards/Index";
import SampleLogo from "../../Logo";

export default function Dashboard_Main_Container({ isLoading }) {
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
      <div className="charts_container">
        <div className="oee_chart chart_container">
          <div>
            <TitleBar titleValue="OEE" />
          </div>
          <div>
            <OeeChart />
          </div>
        </div>
        <div className="planned_vs_actual_chart bottom_chart_container">
          <div>
            <TitleBar titleValue="Planned Vs Actual" />
          </div>
          <div className="planned_vs_actual_chart">
            <Planned_Vs_Actual_Chart />
          </div>
        </div>
        <div className="downtime_chart bottom_chart_container">
          <div>
            <TitleBar titleValue="Downtime" />
          </div>
          <div className="downtime_chart_value_container">
            {data.map((item) => {
              return (
                <div className="downtime_label_value_container">
                  <div className="downtime_label_container">{item.label}</div>
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
        <div className="quality_chart_container bottom_chart_container">
          <div>
            <TitleBar titleValue="Quality" />
          </div>
          <div className="quality_chart">
            <Quality_chart />
          </div>
        </div>
      </div>
    </div>
  );
}
