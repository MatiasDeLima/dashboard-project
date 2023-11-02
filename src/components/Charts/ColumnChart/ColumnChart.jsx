import { Component } from "react";
import Chart from "react-apexcharts";

import "./ColumnChart.css";

class ColumnChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "bar",
          height: 200,
          width: 268,
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "60%",
            // endingShape: "rounded",
            // borderRadiusApplication: "end",
            // borderRadius: 16,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 4,
          colors: ["transparent"],
        },
        grid: {
          show: true,
          strokeDashArray: 4,
          padding: {
            left: 16,
            right: 16,
            top: -20,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          floating: false,
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
          show: true,
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          shared: true,
          intersect: false,
          style: {
            fontFamily: "Inter, sans-serif",
          },
        },
      },
      series: [
        {
          color: "#32B8CB",
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60],
        },
      ],
    };
  }
  render() {
    return (
      <div className="chart__card">
        <h3 className="chart__title">Inflação</h3>
        <div className="center">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width={268}
            height={200}
          />
        </div>

        <div className="chart__infos">
          <div className="chart__info-data">
            <div className="chart__info-color-3"></div>
            <span className="chart__info-name">Info name</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ColumnChart;
