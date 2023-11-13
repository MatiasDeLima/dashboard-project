import React from "react";

import "./Card.css";

const Card = ({number, icon, title, description, color}) => {
  return (
    <article className="monitoramento__card">
      <div className="monitoramento__number">{number}</div>
      <div className={`monitoramento__icon ${color}`}>
        <i class={icon}></i>
      </div>

      <div className="monitoramento__name">{title}</div>

      <p className="gerenciamento__description">
        {description}
      </p>
    </article>
  );
};

export default Card;
