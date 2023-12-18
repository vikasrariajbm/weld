import React from 'react';
import LoadingSpinner from '../LoadingSpinner/Index';
import TitleBar from '../Charts/TitleBar';
import Stats_Card from '../statsCards/Index';
import Current_chart from '../Charts/Current/Index';
import Voltage_chart from '../Charts/Voltage/Index';
import { statsData } from './stats/StatsData';

export default function Machine_wise_view_screen({ isLoading }) {
  const test = {
    productionCount: 0,
    weldLength: 22,
    wireConsumed: 287,
    wireLength: 26,
    rework: 287,
    downtime: 287,
    oee: 398,
    availibility: 297,
    performance: 278,
    quality: 287
  };
  return (
    <div className={isLoading ? 'blur' : ''}>
      {isLoading && <LoadingSpinner />}
      <div className="dashboard_stats_container">
        {statsData.map((stat) => (
          <Stats_Card
            key={stat.cardValueKey}
            cardTitle={stat.cardTitle}
            cardValue={test[stat.cardValueKey]}
            cardIcon={stat.cardIcon}
            unit={stat.unit}
          />
        ))}
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
