import CanvasJSReact from "@canvasjs/react-charts";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function Downtime_Chart() {
  const data = [
    { y: 15, label: "MTBF" },
    { y: 55, label: "MTTR" },
    { y: 30, label: "Machine Breakdown" },
  ];
  const options = {
    animationEnabled: true,
    backgroundColor: "transparent",

    // exportEnabled: true,
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: data,
      },
    ],
  };
  return (
    <div className="downtime_chart_container">
      <div className="downtime_chart_value_container">
        {data.map((item) => {
          return (
            <div className="downtime_label_value_container">
              <div className="label_container">{item.label}</div>
              <div className="downtime_value_container">
                {item.y} <span className="unit_container">%</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="main_chart_container">
        {" "}
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
      </div>
    </div>
  );
}
