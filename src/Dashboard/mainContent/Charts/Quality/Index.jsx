import CanvasJSReact from "@canvasjs/react-charts";
import React from "react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function Quality_chart() {
  const options = {
    animationEnabled: true,
    backgroundColor: "transparent",
    data: [
      {
        type: "doughnut",
        startAngle: 270,
        radius: "80%",
        innerRadius: "60%",
        showInLegend: true,
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Ok Part", y: 75 },
          { name: "Rejection Part", y: 15 },
          { name: "Rework Part", y: 10 },
        ],
      },
    ],
  };
  return (
    <React.Fragment>
      <div className="quality_chart_container">
        <CanvasJSChart options={options} />
      </div>
    </React.Fragment>
  );
}
