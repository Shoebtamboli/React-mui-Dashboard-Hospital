import * as React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

var ROOT_PATH =
  "https://echarts.apache.org/examples/data/asset/geo/Veins_Medical_Diagram_clip_art.svg";

//var myChart = echarts.init(document.getElementById("main"));
type EChartsOption = echarts.EChartsOption;

var chartDom = document.getElementById("main")!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

export default function OrganData() {
  echarts.registerMap("organ_diagram", { svg: ROOT_PATH });
  option = {
    tooltip: {},
    geo: {
      left: 10,
      right: "50%",
      map: "organ_diagram",
      selectedMode: "multiple",
      emphasis: {
        focus: "self",
        itemStyle: {
          color: null
        },
        label: {
          position: "bottom",
          distance: 0,
          textBorderColor: "#fff",
          textBorderWidth: 2
        }
      },
      blur: {},
      select: {
        itemStyle: {
          color: "#b50205"
        },
        label: {
          show: false,
          textBorderColor: "#fff",
          textBorderWidth: 2
        }
      }
    },
    grid: {
      left: "60%",
      top: "20%",
      bottom: "20%"
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
        "liver"
      ]
    },
    series: [
      {
        type: "bar",
        emphasis: {
          focus: "self"
        },
        data: [121, 321, 141, 52, 198, 289, 139]
      }
    ]
  };
  myChart.setOption(option);
  // myChart.on("mouseover", { seriesIndex: 0 }, function (event) {
  //   myChart.dispatchAction({
  //     type: "highlight",
  //     geoIndex: 0,
  //     name: event.name
  //   });
  // });
  // myChart.on("mouseout", { seriesIndex: 0 }, function (event) {
  //   myChart.dispatchAction({
  //     type: "downplay",
  //     geoIndex: 0,
  //     name: event.name
  //   });
  // });

  return (
    <React.Fragment>
      <ReactECharts option={option} opts={{ renderer: "canvas" }} />
      {/* <img src={ROOT_PATH} /> */}
    </React.Fragment>
  );
}
