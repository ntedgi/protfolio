// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./data";
import LineChart from "./line-chart";
import "./styles.scss";

Chart.register(CategoryScale);
 
export default function SOFChart() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "",
        borderWidth: 1
      }
    ]
  });
 
  return (
    <div className="App">
              <LineChart chartData={chartData} />
    </div>
  );
}