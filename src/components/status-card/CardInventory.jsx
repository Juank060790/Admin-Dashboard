import React from "react";

import "./statuscard.css";

const CardInventory = (props) => {
  console.log("props :>> ", props);
  return (
    <div
      id={props.id}
      onClick={props.clickCard}
      className="status-card  add-item-card"
    >
      <div className="status-card__icon">
        <i className={props.icon}></i>
      </div>
      <div className="status-card__info">
        <h3>{props.count}</h3>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default CardInventory;
