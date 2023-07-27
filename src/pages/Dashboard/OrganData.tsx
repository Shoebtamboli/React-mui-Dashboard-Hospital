import * as React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

var ROOT_PATH =
  "https://echarts.apache.org/examples/data/asset/geo/Veins_Medical_Diagram_clip_art.svg";

echarts.registerMap("organ_diagram", { svg: ROOT_PATH });

export default function OrganData() {
  var option: echarts.EChartsOption = {
    tooltip: {},
    geo: {
      left: 10,
      right: "50%",
      map: "organ_diagram",
      selectedMode: "multiple",
      emphasis: {
        itemStyle: {
          color: null,
        },
        label: {
          position: "bottom",
          distance: 0,
          textBorderColor: "#fff",
          textBorderWidth: 2,
        },
      } as any,
      blur: {},
      select: {
        itemStyle: {
          color: "#b50205",
        },
        label: {
          show: false,
          textBorderColor: "#fff",
          textBorderWidth: 2,
        },
      },
    },
    grid: {
      left: "60%",
      top: "20%",
      bottom: "20%",
    },
    xAxis: {},
    yAxis: {
      data: [
        "heart",
        "large-intestine",
        "small-intestine",
        "spleen",
        "kidney",
        "lung",
        "liver",
      ],
    },
    series: [
      {
        type: "bar",
        emphasis: {
          focus: "self",
        },
        data: [121, 321, 141, 52, 198, 289, 139],
      },
    ],
  };

  return (
    <React.Fragment>
      <ReactECharts option={option} opts={{ renderer: "canvas" }} />
    </React.Fragment>
  );
}
