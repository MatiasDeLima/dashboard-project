import { Component } from "react";
import Chart from "react-apexcharts";

import React from "react";
import "./ColumnBasicChart.css";

class ColumnBasicChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [21, 22, 10, 28, 16, 21, 13, 30],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            },
          },
        },
      },
      colors: ['#F44336', '#E91E63', '#9C27B0'],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["John", "Doe"],
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
          ["Lily", "Roberts"],
        ],
        labels: {
          style: {
            colors: ['#F44336', '#E91E63', '#9C27B0'],
            fontSize: "12px",
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="chart__content">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="300"
          height="300"
        />
      </div>
    );
  }
}

export default ColumnBasicChart;
