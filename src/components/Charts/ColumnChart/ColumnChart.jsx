import { Component } from "react";
import Chart from "react-apexcharts";

import "./ColumnChart.css";

class ColumnChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60],
        },
      ],
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
        />
      </div>
    );
  }
}

export default ColumnChart;
