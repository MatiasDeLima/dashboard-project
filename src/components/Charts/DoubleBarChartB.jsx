import { Component } from "react";
import Chart from "react-apexcharts";
import ChartInfos from "./ChartUtils/ChartInfos";

class DoubleBarChartB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Net Profit",
          color: "#FF5555",
          data: [
            { x: "Mon", y: 231 },
            { x: "Tue", y: 122 },
            { x: "Wed", y: 63 },
            { x: "Thu", y: 421 },
            { x: "Fri", y: 122 },
            { x: "Sat", y: 323 },
          ],
        },
        {
          name: "Free Cash Flow",
          color: "#FFDDDD",
          data: [
            { x: "Mon", y: 232 },
            { x: "Tue", y: 113 },
            { x: "Wed", y: 341 },
            { x: "Thu", y: 224 },
            { x: "Fri", y: 522 },
            { x: "Sat", y: 411 },
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: "100%",
          width: "100%",
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "70%",
            endingShape: "rounded",
            borderRadiusApplication: "around",
            borderRadius: 4,
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
    };
  }

  render() {
    const infoData = [
      { name: "Várzea Grande", fillColor: "#FF5555" },
      { name: "Sinop", fillColor: "#FFDDDD" },
    ];
    return (
      <div className="chart__card">
        <div className="chart__top">
          <h3 className="chart__title">Endividamento</h3>

          <div className="chart__icon red">
            <i className="ri-community-line"></i>
          </div>
        </div>
        <div className="center">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width={268}
            height={200}
          />
        </div>

        <ChartInfos infosArray={infoData} />
      </div>
    );
  }
}

export default DoubleBarChartB;
