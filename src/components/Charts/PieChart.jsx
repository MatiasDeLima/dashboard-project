import React from "react";

import { Component } from "react";
import Chart from "react-apexcharts";
import ChartInfos from "./ChartUtils/ChartInfos";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [26.8, 20.4],
      colors: ["#16BDCA", "#9061F9"],
      chart: {
        height: 420,
        width: "100%",
        type: "pie",
      },
      options: {
        stroke: {
          colors: ["white"],
          lineCap: "",
        },
        plotOptions: {
          pie: {
            labels: {
              show: true,
            },
            size: "100%",
            dataLabels: {
              offset: -25,
            },
          },
        },
        labels: ["Direct", "Organic search", "Referrals"],
        dataLabels: {
          enabled: true,
          style: {
            fontFamily: "Inter, sans-serif",
          },
        },
        legend: {
          position: "bottom",
          fontFamily: "Inter, sans-serif",
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value + "%";
            },
          },
        },
        xaxis: {
          labels: {
            formatter: function (value) {
              return value + "%";
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
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
        <div className="center">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            width={280}
          />
        </div>

        <ChartInfos infosArray={infoData} />
      </div>
    );
  }
}

export default PieChart;
