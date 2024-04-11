// components/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import { Colors } from 'chart.js';
import Chart from "chart.js/auto";

Chart.register(Colors);
 
function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false
            },
            colors: {
                enabled: false
              }
          }
        }}
      />
    </div>
  );
}
export default LineChart;