import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/actions/product.actions";
import courses from "../../assets/JsonData/courses.json";

import "./additemmodal.css";

const Dropdown = (props) => {
  const changeSelect = (e) => {
    props.setItemForm({
      ...props.itemForm,
      course: courses[e.target.value],
    });
  };

  return (
    <select
      onChange={changeSelect}
      name="category"
      className="input-modal  modal-item-inner"
      // required
    >
      {courses.map((course, index) => {
        return (
          <>
            {course.title}
            <option
              className="modal-item-inner"
              key={index}
              value={course.title}
            >
              {course.title}
            </option>
          </>
        );
      })}
    </select>
  );
};

const AddItemModal = () => {
  const dispatch = useDispatch();

  const [itemForm, setItemForm] = useState({
    name: "",
    phone_number: "",
    birthdate: "",
    email: "",
    course: "",
    start_date: "",
  });

  const handleChange = (e) =>
    setItemForm({ ...itemForm, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("If all the information is correct continue")) {
      dispatch(productActions.saveItemDataBase(itemForm));
      // console.log("itemForm :>> ", itemForm);
    }
  };

  const clearForm = () => {
    setItemForm({
      name: "",
      phone_number: "",
      birthdate: "",
      email: "",
      course: "",
      date_created: "",
      start_date: "",
    });
  };

  return (
    <div className="modal-add-item">
      <form onSubmit={handleSubmit} className="add-item-form">
        <div className="items-container">
          <div className="item col-5">
            <div className="item-inner">
              <div>Student name:</div>
              <input
                // required
                onChange={handleChange}
                name="name"
                className="input-modal"
                type="text"
                placeholder="Enter student name"
              />
            </div>
          </div>
          <div className="item col-4">
            <div className="item-inner">
              <div>Email addres</div>
              <input
                // required
                onChange={handleChange}
                name="email"
                className="input-modal"
                type="text"
                placeholder="Email address"
              />
            </div>
          </div>
          <div className="item col-3">
            <div className="item-inner">
              <div>Birth date</div>
              <input
                // required
                onChange={handleChange}
                name="birthdate"
                className="input-modal"
                type="date"
                placeholder="Birth date"
              />
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <div>Phone Number:</div>

              <input
                onChange={handleChange}
                name="phone_number"
                className="input-symbol-euro modal-item-inner input-modal"
                type="tel"
                placeholder="Phone number"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                // required
              />
            </div>
          </div>
        </div>

        <div className="items-container">
          <div className="item col-2 category-dropdown">
            <div className="item-inner ">
              <label
                type="select"
                className="input-modal category-dropdown-title"
                htmlFor="course"
              >
                Course:
              </label>
              <Dropdown itemForm={itemForm} setItemForm={setItemForm} />
            </div>
          </div>
          <div className="item col-3">
            <div className="item-inner">
              <div>Start Date</div>
              <input
                // required
                onChange={handleChange}
                name="start_date"
                className="input-modal"
                type="date"
                placeholder="Start Date"
              />
            </div>
          </div>
          {/* <div className="col-10 item">
            <div className="item-inner">
              <div>Comments:</div>
              <textarea
                rows="4"
                cols="50"
                onChange={handleChange}
                name="comments"
                className="modal-item-inner input-modal text-area-inventory"
                // type="text"
                placeholder="Enter extra comments"
                // required
              />
            </div>
          </div> */}

          {/* <div className="item">
            <div className="item-inner">
              <div>Item in stock:</div>
              <input
                onChange={handleChange}
                name="in_stock"
                className="modal-item-inner input-modal"
                type="number"
                placeholder="Items in stock"
                // required
              />
            </div>
          </div> */}
        </div>
        <div className="items-container col-6 ">
          <div className="col-3">
            <div className="item-inner ">
              <input
                onChange={handleChange}
                className="button-save"
                type="submit"
                align="center"
                value="Enter"
              />
            </div>
          </div>
          <div className="col-3 ">
            <div className="item-inner">
              <input
                onChange={clearForm}
                className="button-cancel"
                // type="submit"
                align="center"
                value="Cancel"
              />
            </div>
          </div>
          <div className="col-7 ">
            {/* <div className="item-inner">
              <input
                className="button-cancel"
                type="submit"
                align="center"
                value="Upload Image {TODO}"
              />
            </div> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItemModal;
