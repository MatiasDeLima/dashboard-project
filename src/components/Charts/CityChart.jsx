

import React from "react";

import { Component } from "react";
import Chart from "react-apexcharts";
import ChartInfos from "./ChartUtils/ChartInfos";

class CityChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [35.1, 23.5, 2.4, 5.4],
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
      chart: {
        height: 320,
        width: "100%",
        type: "donut",
      },
      stroke: {
        colors: ["transparent"],
        lineCap: "",
      },
      options: {
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: 20,
                },
                total: {
                  showAlways: true,
                  show: true,
                  label: "Unique visitors",
                  fontFamily: "Inter, sans-serif",
                  formatter: function (w) {
                    const sum = w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);
                    return `${sum}k`;
                  },
                },
                value: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: -20,
                  formatter: function (value) {
                    return value + "k";
                  },
                },
              },
              size: "80%",
            },
          },
        },
        grid: {
          padding: {
            top: -2,
          },
        },
        labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "bottom",
          fontFamily: "Inter, sans-serif",
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value + "k";
            },
          },
        },
        xaxis: {
          labels: {
            formatter: function (value) {
              return value + "k";
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
      { name: "Sinop", fillColor: "#AEDC71" },
      { name: "Sinop", fillColor: "#AEDC71" },
    ];
    return (
      <div className="chart__card">
        <h3 className="chart__title">Índices econômicos</h3>

        <div className="chart__content">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width={250}
          />
        </div>

        <ChartInfos infosArray={infoData} />
      </div>
    );
  }
}

export default CityChart;
