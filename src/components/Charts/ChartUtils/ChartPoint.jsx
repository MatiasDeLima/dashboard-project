import React from "react";

import "./ChartUtils.css";

const ChartPoint = ({ fillColor }) => {
  return (
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 0 h8 a2 2 0 0 1 2 2 v8 a2 2 0 0 1 -2 2 h-8 a2 2 0 0 1 -2 -2 v-8 a2 2 0 0 1 2 -2 z"
        x="6"
        y="6"
        width="12"
        height="12"
        rx="2"
        ry="2"
        fill={fillColor}
      />
    </svg>
  );
};

export default ChartPoint;
