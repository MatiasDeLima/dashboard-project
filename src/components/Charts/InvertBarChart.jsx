import React from "react";

import { Component } from "react";
import Chart from "react-apexcharts";
import ChartInfos from "./ChartUtils/ChartInfos";

class InvertBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Income",
          color: "#31C48D",
          data: ["1420", "1620", "1820", "1420", "1650", "2120"],
        },
        {
          name: "Expense",
          data: ["788", "810", "866", "788", "1100", "1200"],
          color: "#F05252",
        },
      ],
      options: {
        chart: {
          sparkline: {
            enabled: false,
          },
          type: "bar",
          width: "100%",
          height: 400,
          toolbar: {
            show: false,
          },
        },
        fill: {
          opacity: 1,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "50%",
            borderRadiusApplication: "end",
            borderRadius: 6,
            dataLabels: {
              position: "top",
            },
          },
        },
        legend: {
          show: true,
          position: "bottom",
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: true,
          intersect: false,
          formatter: function (value) {
            return "$" + value;
          },
        },
        xaxis: {
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
            },
            formatter: function (value) {
              return "$" + value;
            },
          },
          categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
            },
          },
        },
        grid: {
          show: true,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: -20,
          },
        },
        fill: {
          opacity: 1,
        },
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

        <div className="chart__content">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width={250}
            height={240}
          />
        </div>

        <ChartInfos infosArray={infoData} />
      </div>
    );
  }
}

export default InvertBarChart;
