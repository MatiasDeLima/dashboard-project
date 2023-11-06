import React from "react";

import { Component } from "react";
import Chart from "react-apexcharts";
import ChartInfos from "./ChartUtils/ChartInfos";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: "100%",
          maxWidth: "100%",
          type: "line",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
        curve: "smooth",
        lineCap: "butt",
      },
      grid: {
        show: true,
        strokeDashArray: 4,
      },
      series: [
        {
          name: "Clicks",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#2381FF",
        },
        {
          name: "CPC",
          data: [6456, 6356, 6526, 6332, 6418, 6500],
          color: "#01AB6C",
        },
      ],
      legend: {
        show: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "01 Feb",
          "02 Feb",
          "03 Feb",
          "04 Feb",
          "05 Feb",
          "06 Feb",
          "07 Feb",
        ],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };
  }

  render() {
    const infoData = [
      { name: "Várzea Grande", fillColor: "#FF702A" },
      { name: "Sinop", fillColor: "#AEDC71" },
    ];
    return (
      <div className="chart__card">
        <h3 className="chart__title">Índices econômicos</h3>
        <div className="center">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            width={250}
            height={200}
          />
        </div>

        <ChartInfos infosArray={infoData} />
      </div>
    );
  }
}

export default LineChart;
