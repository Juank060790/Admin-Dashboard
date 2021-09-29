import React from "react";

import "./statuscard.css";

const CardInventory = (props) => {
  return (
    <div
      onClick={props.setInventoryModal}
      className="status-card  add-item-card"
    >
      <div className="status-card__icon">
        <i className={props.icon}></i>
      </div>
      <div className="status-card__info">
        <h4>{props.count}</h4>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default CardInventory;
