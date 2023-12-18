// import React from "react";

// export default function Stats_Card({ cardIcon, cardTitle, cardValue }) {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         padding: "10px 30px",
//         display: "flex",
//         border: "1px solid black",
//         flexDirection: "column",
//       }}
//     >
//       <div className="row">
//         <div className="col-sm-4 card-icon">{cardIcon}</div>
//         <div
//           className="col-sm-8 card-title"
//           style={{
//             fontSize: "16px",
//             textAlign: "right",
//             fontWeight: 800,
//             letterSpacing: "0.7px",
//             whiteSpace: "nowrap",
//           }}
//         >
//           {cardTitle}
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-sm-12 card-value">{cardValue}</div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Stats_Card({ cardIcon, cardTitle, cardValue, unit }) {
  return (
    <div className="stats_card_container">
      <div className="stats_card_title_container">
        <div className="stats_card_icon">{cardIcon}</div>
        <div className="stats_card_title">{cardTitle}</div>
      </div>
      <div className="stats_card_value_container">
        <div className="stats_card_value">
          {cardValue}
          <span className="stats_card_unit">{unit}</span>
        </div>
      </div>
    </div>
  );
}
