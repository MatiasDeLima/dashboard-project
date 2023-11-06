import React from "react";
import CircleProgress from "./CircleProgress/CircleProgress";
import ChartInfos from "./ChartUtils/ChartInfos";

const MapChart = () => {
  const infoData = [
    { name: "Várzea Grande", fillColor: "#FF702A" },
    { name: "Sinop", fillColor: "#AEDC71" },
    { name: "Sinop", fillColor: "#AEDC71" },
  ];
  
  return (
    <div className="chart__card">
      <h3 className="chart__title">Índices econômicos</h3>

      <div className="chart__content-double">
        <div className="map__image">
          <img src="../src/assets/cidade-map.svg" />
        </div>

        <div className="map__charts">
          <div className="map__content">
            <span className="map__content-name">2021</span>
            <CircleProgress
              percentage={50}
              stroke={"#FF702A"}
              circleWidth={60}
              textFont={12}
            />
          </div>

          <div className="map__content">
            <span className="map__content-name">2021</span>
            <CircleProgress
              percentage={50}
              stroke={"#FF702A"}
              circleWidth={60}
              textFont={12}
            />
          </div>

          <div className="map__content">
            <span className="map__content-name">2021</span>
            <CircleProgress
              percentage={50}
              stroke={"#FF702A"}
              circleWidth={60}
              textFont={12}
            />
          </div>
        </div>
      </div>

      <div className="chart__content-info">
        <ChartInfos infosArray={infoData} />
      </div>
    </div>
  );
};

export default MapChart;
