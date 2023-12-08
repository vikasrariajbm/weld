import React, { useState, useEffect } from "react";
import TimeRangeTabs from "./timeRangeTabs/Index";
export default function DashboardFilterBar({
  masterParamValue,
  masterParamText,
  handleTabAndMasterValueChange,
}) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-3">
          <h5 style={{ letterSpacing: "0.8px" }}>{masterParamText}</h5>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-7">
          <TimeRangeTabs
            handleFilterOptionsChange={handleTabAndMasterValueChange}
            masterParamValue={masterParamValue}
            defaultStartTime={new Date(new Date().setHours(0, 0, 0))}
            defaultEndTime={new Date(new Date().setHours(23, 59, 59))}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

// import React, { useState, useEffect } from "react";
// import "../../charts/Navbar.css";
// import DatePicker from "react-datepicker";
// export default function DashboardFilterBar({
//   masterParamValue,
//   sendDataToParent,
//   masterParamText,
// }) {
//   const [selectedTab, setSelectedTab] = useState("today");
//   const [masterValue, setmasterValue] = useState("A");
//   const [customDate, setCustomDate] = useState({
//     customStartDate: null,
//     customEndDate: null,
//   });
//   const [showDatePickers, setShowDatePickers] = useState(false);

//   const handleCustomDateChange = (date, keyName) => {
//     setCustomDate((prev) => ({
//       ...prev,
//       [keyName]: date,
//     }));
//   };

//   const handleButtonClick = () => {
//     setShowDatePickers(true);
//   };

//   const handleCustomDateSubmit = () => {
//     // Handle submission with selected customStartDate and customEndDate
//     setShowDatePickers(false); // Close the date pickers after submission
//     sendDataToParent((prev) => ({
//       ...prev,
//       startTime: customDate.customStartDate.getTime(),
//       endTime: customDate.customEndDate.getTime(),
//     }));
//   };

//   useEffect(() => {
//     sendDataToParent((prev) => ({
//       ...prev,
//       masterValue: masterValue,
//     }));
//   }, [masterValue]);

//   const getTimestampWeekAgo = () => {
//     const currentDate = new Date();
//     const oneWeekAgo = new Date(
//       currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
//     );
//     return Math.floor(oneWeekAgo.getTime() / 1000);
//   };

//   const getTimestampMonthAgo = () => {
//     const currentDate = new Date();
//     const oneMonthAgo = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth() - 1,
//       currentDate.getDate()
//     );
//     return Math.floor(oneMonthAgo.getTime() / 1000);
//   };

//   const config = {
//     today: {
//       startTime: new Date().setHours(0, 0, 0),
//       endTime: new Date().setHours(23, 59, 59),
//     },
//     week: {
//       startTime: getTimestampWeekAgo(),
//       endTime: new Date().setHours(23, 59, 59),
//     },
//     month: {
//       startTime: getTimestampMonthAgo(),
//       endTime: new Date().setHours(23, 59, 59),
//     },
//   };

//   const handleTabChange = (selectedTab) => {
//     setSelectedTab(selectedTab);
//     const { startTime, endTime } = config[selectedTab];
//     sendDataToParent((prev) => ({
//       ...prev,
//       startTime,
//       endTime,
//     }));
//   };

//   return (
//     <>
//       <div className="Minsss my-1">
//         <div className="parag">
//           <p>{masterParamText}</p>
//         </div>

//         <div className="box1">
//           <div className="dropdown">
//             <button
//               className="btn btn-secondary dropdown-toggle"
//               type="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               {masterValue}
//             </button>
//             <ul className="dropdown-menu">
//               <li>
//                 <a
//                   className="dropdown-item"
//                   onClick={() => setmasterValue("A")}
//                   href="#"
//                 >
//                   A
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="dropdown-item"
//                   onClick={() => setmasterValue("B")}
//                   href="#"
//                 >
//                   B
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="dropdown-item"
//                   onClick={() => setmasterValue("C")}
//                   href="#"
//                 >
//                   C
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="btunn-group" role="group">
//             <button
//               type="button"
//               onClick={() => handleTabChange("today")}
//               style={{
//                 backgroundColor: selectedTab === "today" ? "blue" : "white",
//               }}
//               className="btn1 "
//             >
//               Today
//             </button>
//             <button
//               type="button"
//               onClick={() => handleTabChange("week")}
//               style={{
//                 backgroundColor: selectedTab === "week" ? "blue" : "white",
//               }}
//               className="btn1 "
//             >
//               Week
//             </button>
//             <button
//               type="button"
//               onClick={() => handleTabChange("month")}
//               style={{
//                 backgroundColor: selectedTab === "month" ? "blue" : "white",
//               }}
//               className="btn1 "
//             >
//               Month
//             </button>
//             <button
//               type="button"
//               onClick={handleButtonClick}
//               style={{
//                 backgroundColor: selectedTab === "custom" ? "blue" : "white",
//               }}
//               className="btn1 "
//             >
//               Custom
//             </button>
//             {showDatePickers && (
//               <div>
//                 <label>Start Date:</label>
//                 <DatePicker
//                   selected={customDate.customStartDate}
//                   name="customStartDate"
//                   onChange={(date) =>
//                     handleCustomDateChange(date, "customStartDate")
//                   }
//                   selectsStart
//                   customStartDate={customDate.customStartDate}
//                   customEndDate={customDate.customEndDate}
//                 />
//                 <label>End Date:</label>
//                 <DatePicker
//                   selected={customDate.customEndDate}
//                   onChange={(date) =>
//                     handleCustomDateChange(date, "customEndDate")
//                   }
//                   selectsEnd
//                   name="customEndDate"
//                   customStartDate={customDate.customStartDate}
//                   customEndDate={customDate.customEndDate}
//                   minDate={customDate.customStartDate}
//                 />
//                 <button onClick={handleCustomDateSubmit}>Submit</button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <hr />
//     </>
//   );
// }
