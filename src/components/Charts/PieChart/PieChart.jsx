import React from "react";

import { Component } from "react";
import Chart from "react-apexcharts";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [43, 22],
      options: {
        colors: ["#FF824B", "#FFE6DB"],
        chart: {
          cssClass: ".apexcharts-justify-center",
          width: "100%",
          type: "pie",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 1024,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      stroke: {
        show: true,
        width: 5,
        colors: ["transparent"],
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
    };
  }

  render() {
    return (
      <div className="chart__card">
        <h3 className="chart__title">Índices econômicos</h3>
        <div className="center">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            width={250}
          />
        </div>

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

export default PieChart;
