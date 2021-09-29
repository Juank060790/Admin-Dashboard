import React from "react";

import "./additemmodal.css";

const categories = {
  1: "Food",
  2: "Clothes",
  3: "Electronics",
  4: "Other",
};

const Dropdown = () => {
  return (
    <select className="input-modal  modal-item-inner">
      {Object.keys(categories).map((key) => {
        return (
          <option className="modal-item-inner" key={key} value={key}>
            {categories[key]}
          </option>
        );
      })}
    </select>
  );
};

const AddItemModal = () => {
  return (
    <div className="modal-add-item">
      <form className="add-item-form">
        <div className="items-container">
          <div className="item col-9">
            <div className="item-inner">
              <div>Item name:</div>
              <input
                name="item"
                className="input-modal"
                type="text"
                placeholder="Enter item name"
              />
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <label type="text" className="input-modal" for="category">
                Choose a category:
              </label>
              <Dropdown />
            </div>
          </div>
        </div>

        <div className="items-container">
          <div className="col-8 item">
            <div className="item-inner">
              <div>Description:</div>
              <input
                name="description"
                className="modal-item-inner input-modal"
                type="text"
                placeholder="Description"
              />
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <div>Price:</div>
              <input
                name="price"
                className="modal-item-inner input-modal"
                type="number"
                placeholder="$"
              />
            </div>
          </div>

          <div className="item">
            <div className="item-inner">
              <div>Item in stock:</div>
              <input
                name="items_in_stock"
                className="modal-item-inner input-modal"
                type="text"
                placeholder="Items in stock"
              />
            </div>
          </div>
        </div>
        <div className="items-container">
          <div className="col-4">
            <div className="item-inner">
              <input
                className="button-save"
                type="submit"
                align="center"
                value="Enter"
              />
            </div>
          </div>
          <div className=" col-4">
            <div className="item-inner">
              <input
                className="button-cancel"
                type="submit"
                align="center"
                value="Cancel"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItemModal;
