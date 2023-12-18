import React, { useState } from "react";
import Dashboard from "./Dashboard_V2/Index";
import config from "./Dashboard_V2/config.json";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("line");
  return (
    <>
      <div className="sort-tabs">
        {config.dashboardTabOption.map((opt) => {
          return (
            <div
              key={opt}
              className={`sort-tab ${selectedTab === opt ? "active" : ""}`}
              onClick={() => setSelectedTab(opt)}
            >
              {opt.toLocaleUpperCase()}
            </div>
          );
        })}
      </div>
      <Dashboard masterParam={selectedTab} />
    </>
  );
}
