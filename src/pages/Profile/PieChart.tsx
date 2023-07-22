import * as React from "react";
import ReactECharts from "echarts-for-react";

export default function PieChart() {
  const option = {
    legend: {
      top: "bottom"
    },
    tooltip: {
      trigger: "item"
    },
    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        radius: [50, 100],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
          borderColor: "#fff",
          borderWidth: 2
        },
        data: [
          { value: 40, name: "Upcoming appointments" },
          { value: 38, name: "Patients handled" },
          { value: 32, name: "Operations performed" },
          { value: 30, name: "Patients referred" }
        ]
      }
    ]
  };

  return (
    <React.Fragment>
      <ReactECharts option={option} />
    </React.Fragment>
  );
}
