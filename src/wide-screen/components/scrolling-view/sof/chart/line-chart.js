// components/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <Line
        width={130}
        height={30}
        data={chartData}
        options={{
          scales: {
            y: {
              display: false,
            },
            x:{
              display: false,
              suggestedMax:100
            }
          },
          pointStyle: false,
          plugins: {
            tooltip: {
              enabled: false
            },
            title:{
              display: false
            },
            legend: {
              display: false
            },
            colors: {
              enabled: false
            }
          },
        }}
      />
    </div>
  );
}
export default LineChart;