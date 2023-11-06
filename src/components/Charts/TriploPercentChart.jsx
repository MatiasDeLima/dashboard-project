import React from "react";

import CircleProgress from "./CircleProgress/CircleProgress";
import ChartInfos from "./ChartUtils/ChartInfos";

const TriploPercentChart = () => {
  const infoData = [
    { name: "Várzea Grande", fillColor: "#FF702A" },
    { name: "Sinop", fillColor: "#AEDC71" },
    { name: "Sinop", fillColor: "#AEDC71" },
  ];

  return (
    <div className="chart__card">
      <h3 className="chart__title">Índices econômicos</h3>

      <div className="chart__content-double">
        <div className="map__charts triplo__charts">
          <div className="map__content triplo__content">
            <CircleProgress
              percentage={50}
              stroke={"#FF702A"}
              circleWidth={80}
              textFont={12}
            />
            <span className="map__content-name">2021</span>
          </div>

          <div className="map__content triplo__content">
            <CircleProgress
              percentage={50}
              stroke={"#FF702A"}
              circleWidth={80}
              textFont={12}
            />
            <span className="map__content-name">2022</span>
          </div>

          <div className="map__content triplo__content">
            <CircleProgress
              percentage={50}
              stroke={"#FF702A"}
              circleWidth={80}
              textFont={12}
            />
            <span className="map__content-name">2023</span>
          </div>
        </div>
      </div>

      <div className="chart__content-info">
        <ChartInfos infosArray={infoData} />
      </div>
    </div>
  );
};

export default TriploPercentChart;
