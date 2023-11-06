import React from "react";
import ChartPoint from "./ChartPoint";

import "./ChartUtils.css";

const ChartInfos = ({ infosArray }) => {
  return (
    <div className="chart__content-info">
      <ul className="chart__content-list">
        {
            infosArray.map((info, index) => (
                <li key={index} className="chart__content-item">
                    <ChartPoint fillColor={info.fillColor} />
                    <span className="chart__content-name">{info.name}</span>
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default ChartInfos;
