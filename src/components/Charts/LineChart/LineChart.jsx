import React from "react";

import { Component } from "react";
import Chart from "react-apexcharts";

import "./LineChart.css";

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
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -26,
        },
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
        curve: 'smooth',
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
    return (
      <div className="chart__card">
        <h3 className="chart__title">Índices econômicos</h3>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width={268}
          height={200}
        />

        <div className="chart__infos">
          <div className="chart__info-data">
            <div className="chart__info-color-4"></div>
            <span className="chart__info-name">Info name</span>
          </div>

          <div className="chart__info-data">
            <div className="chart__info-color-5"></div>
            <span className="chart__info-name">Info name</span>
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;
