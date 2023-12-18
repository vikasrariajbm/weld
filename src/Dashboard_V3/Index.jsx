import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import FilterBar from "./filterBar/Index";
import "rsuite/styles/index.less";
// import Dashboard_Main_Container from "./mainContent/Index";
import React, { useEffect, useState } from "react";
import Line_wise_view_screen from "./mainContent/LineWiseViewScreen/Index";
import Machine_wise_view_screen from "./mainContent/MachineWiseViewScreen/Index";

function App({ masterParam }) {
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
          masterParamValue={masterParam}
          masterParamText={`${masterParam.toLocaleUpperCase()} WISE VIEW`}
          handleTabAndMasterValueChange={handleTabAndMasterValueChange}
        />
      </div>
      <hr />
      <div className="dashboard_main_container mt-3">
        {masterParam === "line" ? (
          <Line_wise_view_screen isLoading={isLoading} />
        ) : (
          <Machine_wise_view_screen isLoading={isLoading} />
        )}
      </div>
    </div>
  );
}

export default App;
