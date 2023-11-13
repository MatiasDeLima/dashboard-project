import React from "react";

import { Component } from "react";
import Chart from "react-apexcharts";
import ChartInfos from "./ChartUtils/ChartInfos";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 4,
          curve: "smooth",
          lineCap: "butt",
        },
        grid: {
          show: true,
          strokeDashArray: 4,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
          ],
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
      },
    };
  }

  render() {
    const infoData = [
      { name: "Várzea Grande", fillColor: "#2381FF" },
      { name: "Sinop", fillColor: "#01AB6C" },
    ];
    return (
      <div className="chart__card">
        <div className="chart__top">
          <h3 className="chart__title">Índices econômicos</h3>

          <div className="chart__icon">
            <i className="ri-money-dollar-circle-line"></i>
          </div>
        </div>
        <div className="center">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            width={250}
            height={220}
          />
        </div>

        <ChartInfos infosArray={infoData} />
      </div>
    );
  }
}

export default LineChart;
