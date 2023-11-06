import React, { useState, useEffect } from "react";

import "./CircleProgress.css";

const CircleProgress = ({ percentage, stroke, circleWidth, textFont }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (offset < percentage) {
        setOffset(offset + 1);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [offset, percentage]);

  const radius = (circleWidth / 2) - 4; // Raio do círculo
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - offset) / 100) * circumference;
  // const circleWidth = 100;

  return (
    <svg width={circleWidth} height={circleWidth}>
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        r={radius}
        className="circle-background"
        strokeWidth="8"
      />
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        r={radius}
        strokeWidth="8"
        stroke={stroke}
        className="circle-progress"
        strokeDasharray={circumference}
        strokeDashoffset={progress}
        transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
      />
      <text x={circleWidth / 2} y={circleWidth / 2} textAnchor="middle" dy="7" fontSize={textFont} className="circle__text">
        {percentage}%
      </text>
    </svg>
  );
};

export default CircleProgress;
