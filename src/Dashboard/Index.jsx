import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import FilterBar from "./filterBar/Index";
import "rsuite/styles/index.less";
import Dashboard_Main_Container from "./mainContent/Index";
import React, { Suspense, useEffect, useState } from "react";
import LoadingSpinner from "./mainContent/LoadingSpinner/Index";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleTabAndMasterValueChange = (selectedFilterData) => {
    console.log("selectedFilterData : ", selectedFilterData);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="dashboard_container p-3">
      <div className="filterBar">
        <FilterBar
          masterParamValue="line"
          masterParamText="Line Wise View"
          handleTabAndMasterValueChange={handleTabAndMasterValueChange}
        />
      </div>
      <div className="dashboard_main_container mt-3">
        <Dashboard_Main_Container isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
