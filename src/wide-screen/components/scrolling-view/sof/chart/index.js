// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./data";
import LineChart from "./line-chart";
import "./styles.scss";


export default function SOFChart() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#6DCE9B",
        ],
        borderWidth: 3,
        borderColor: "#6DCE9B",
      }
    ]
  });

  return (
    <div className="App" >
      <LineChart chartData={chartData} width={100} height={10} />
    </div>
  );
}