import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import FilterBar from "./filterBar/Index";
import "rsuite/styles/index.less";
// import Dashboard_Main_Container from "./mainContent/Index";
import React, { useState } from "react";
import Line_wise_view_screen from "./mainContent/LineWiseViewScreen/Index";
import Machine_wise_view_screen from "./mainContent/MachineWiseViewScreen/Index";
import axios from "axios";
import { formatDateToISOString } from "./utils";

function App({ masterParam }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleTabAndMasterValueChange = async (filterData) => {
    //setIsLoading(true);
    try {
      const url = `http://127.0.0.1:8000/api/machine-data/?startTime=${formatDateToISOString(
        filterData.startTime
      )}&endTime=${formatDateToISOString(
        filterData.endTime
      )}&plantId=2071&${masterParam}Id=${filterData.masterParamValue}`;
      console.log("====================================");
      console.log(url);
      console.log("====================================");
      const res = await axios.get(url);
      const data = res.data;
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log("error : ", error);
    }
  };

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
          <Machine_wise_view_screen isLoading={isLoading} data={data} />
        )}
      </div>
    </div>
  );
}

export default App;
