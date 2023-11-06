import React from "react";

import CircleProgress from "./CircleProgress/CircleProgress.jsx";
import ChartInfos from "./ChartUtils/ChartInfos.jsx";

export const PercentChartOne = () => {
  const infoData = [
    { name: "Várzea Grande", fillColor: "#FF702A" },
    { name: "Sinop", fillColor: "#AEDC71" },
  ];

  return (
    <div className="chart__card">
      <h3 className="chart__title">Índices econômicos</h3>

      <div className="chart__content-double">
        <CircleProgress
          percentage={50}
          stroke={"#FF702A"}
          circleWidth={100}
          textFont={16}
        />

        <CircleProgress
          percentage={90}
          stroke={"#AEDC71"}
          circleWidth={100}
          textFont={16}
        />
      </div>

      <div className="chart__content-info">
        <ChartInfos infosArray={infoData} />
      </div>
    </div>
  );
};

export default PercentChartOne;
