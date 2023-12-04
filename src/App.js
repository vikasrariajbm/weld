// import "./App.css";
// import Chart from "./charts/BarChart";
// import Chart2 from "./charts/Barchart2";
// import PieChart from "./charts/PieChart";
// import PieChart2 from "./charts/PieChart2";
// import PieChart3 from "./charts/PieChart3";
// import PieChart4 from "./charts/PieChart4";
// import PieChart5 from "./charts/PieChart5";
// import { format } from 'date-fns';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Cards from "./charts/Cards";
// import Navbar from "./charts/Navbar";

// import { useState, useEffect } from "react";

// function App() {

//   const [childData, setChildData] = useState({
//     masterParam : 'line',
//     masterValue : "A",
//     startTime : new Date().setHours(0,0,0),
//     endTime : new Date().setHours(23,59,59)
//   });
//   const handleChildData = (data) => {
//     // Handle data received from the child component
//     const newData = {
//       masterParam : data.masterParam,
//       masterValue : data.masterValue,
//       startTime : new Date(data.startTime).toLocaleString(),
//       endTime : new Date(data.endTime).toLocaleString()
//     }
//       console.log(newData);
//     setChildData(newData);
    
//   };





//   return (
//     <div className="Mainss">
            
//   <div className="HeadMain">
//  <Navbar  sendDataToParent={handleChildData} />
// </div>

//       <div className="BoxMain">
//         <div className="Box1">
//           <div className="Box1helper">
//             <p className="mx-3 fs-6 fw-bold">Average Oee</p>
//           </div>
//           <div className="Box1combiner">
//             <Chart />
//             <div>
//               <PieChart3 />
//               <PieChart4 />
//               <PieChart5 />
//             </div>
//           </div>
//         </div>

//         <div className="Box2">
//           <div className="Box1helper">
//             <p className="mx-3 fs-6 fw-bold">Planned Vs Actual</p>
//           </div>

//           <Chart2 />
//         </div>
//         {/* <PieChart/> */}
//       </div>

//       <div className="BoxMain2">
//         <div className="Box5">
//           <Cards></Cards>
//         </div>

//         <div className="Box3">
//           <div className="Box1helper">
//             <p className="mx-3 fs-6 fw-bold">Downtime</p>
//           </div>
//           <PieChart />
//         </div>
//         <div className="Box4">
//           <div className="Box1helper">
//             <p className="mx-3 fs-6 fw-bold">Quality</p>
//           </div>
//           <PieChart2 />
//         </div>
//       </div> 
//     </div>
//   );
// }

// export default App;
























import "./App.css";
import Chart from "./charts/BarChart";
import Chart2 from "./charts/Barchart2";
import PieChart from "./charts/PieChart";
import PieChart2 from "./charts/PieChart2";
import PieChart3 from "./charts/PieChart3";
import PieChart4 from "./charts/PieChart4";
import PieChart5 from "./charts/PieChart5";
import { format } from 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cards from "./charts/Cards";
import Navbar from "./charts/Navbar";

import { useState, useEffect } from "react";

function App() {

  const defaultStartTime = new Date().setHours(0,0,0)
  const defaultEndTime = new Date().setHours(23,59,59)
  const masterParam="line"

  const [childData, setChildData] = useState({
    masterParam : masterParam,
    masterValue : "A",
    startTime : new Date(defaultStartTime).toLocaleString(),
    endTime : new Date(defaultEndTime).toLocaleString()
  });
  const[masterData, setMasterData] = useState(childData)

  const handleChildData = (data) => {
    const newData = {
      masterParam : data.masterParam,
      masterValue : data.masterValue,
      startTime : new Date(data.startTime).toLocaleString(),
      endTime : new Date(data.endTime).toLocaleString()
    }
    setMasterData(newData)
  };

  useEffect(() => {
    handleChildData(childData)
  }, [childData])
  


  





  return (
    <div className="Mainss">
            
  <div className="HeadMain">
 <Navbar  masterParamText="Line Wise View"  sendDataToParent={setChildData} />
</div>

     {JSON.stringify(masterData)}
    </div>
  );
}

export default App;


//   return (
//     <div className="Mainss">
            
//   <div className="HeadMain">
//  {/* <Navbar  sendDataToParent={handleChildData} /> */}
//  <Navbar  masterParamText="Line Wise View"  sendDataToParent={setChildData} />
// </div>

//       <div className="BoxMain">
//         <div className="Box1">
//           <div className="Box1helper">
//             <p className="mx-3 fs-6 fw-bold">Average Oee</p>
//           </div>
//           <div className="Box1combiner">
//             <Chart />
//             <div>
//               <PieChart3 />
//               <PieChart4 />
//               <PieChart5 />
//             </div>
//           </div>
//         </div>

//         <div className="Box2">
//           <div className="Box1helper">
//             <p className="mx-3 fs-6 fw-bold">Planned Vs Actual</p>
//           </div>

//           <Chart2 />
//         </div>
//         {/* <PieChart/> */}
//       </div>

//       <div className="BoxMain2">
//         <div className="Box5">
//           <Cards></Cards>
//         </div>

//         <div className="Box3">
//           <div className="Box1helper">
//             <p className="mx-3 fs-6 fw-bold">Downtime</p>
//           </div>
//           <PieChart />
//         </div>
//         <div className="Box4">
//           <div className="Box1helper">
//             <p className="mx-3 fs-6 fw-bold">Quality</p>
//           </div>
//           <PieChart2 />
//         </div>
//       </div> 
//     </div>
//   );
// }

// export default App;

