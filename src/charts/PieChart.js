import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Basic Pie Chart"
    },
	width: 660, // Set the width of the chart
    height: 270,
    data: [{
      type: "pie",
      dataPoints: [
        { label: "Apple", y: 30 },
        { label: "Orange", y: 25 },
        { label: "Banana", y: 20 },
        { label: "Mango", y: 15 },
        { label: "Grapes", y: 10 }
      ]
    }]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default PieChart;
