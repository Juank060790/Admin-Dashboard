import React, { useState } from "react";

import CardInventory from "../components/status-card/CardInventory";

// import statusCards from "../assets/JsonData/status-card-data-inventory.json";
import AddItemModal from "../components/modalAddItem/AddItemModal";
import Studentlistpanel from "../components/studentList/StudentListPanel";

// const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

const AddStudent = (props) => {
  return (
    <div>
      <div>
        <h1>Add Student</h1>
      </div>

      <AddItemModal />
      <div>
        <div className=" col-1">
          <div className="item-inner"></div>
        </div>
      </div>
    </div>
  );
};

// Show panel from inventory
const ShowPanel = (props) => {
  console.log("showwww :>> ", props);
  if (props.panelShow === "Products") {
    return (
      <>
        <Studentlistpanel />{" "}
      </>
    );
  } else if (props.panelShow === "add-item") {
    return (
      <>
        {" "}
        <AddStudent />{" "}
      </>
    );
  } else {
    return null;
  }
};

const Inventory = () => {
  // Add a modal to add items into the inentory
  const [panelShow, setPanelShow] = useState("");
  console.log("panelShow :>> ", panelShow);

  const clickCard = (e) => {
    setPanelShow(e.target.id);
    console.log("e :>> ", e.target.id);
  };

  return (
    <div>
      <h2 className="page-header">Students</h2>
      <div className="row">
        <div className="col-2">
          <div className="column">
            <div className="">
              <CardInventory
                icon={"bx bx-plus-circle"}
                title={"Add Student"}
                clickCard={clickCard}
                id={"add-item"}
              />
            </div>
            <div className="">
              <CardInventory
                id={"Products"}
                icon={"bx bx-list-ul"}
                title={"Student Lists"}
                clickCard={clickCard}
              />
            </div>
          </div>
        </div>
        <div className="col-10">
          <div className="card full-height">
            <ShowPanel panelShow={panelShow} />
          </div>
        </div>
        {/* <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>top customers</h3>
            </div>
            <div className="card__body">
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCusomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCusomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div> */}
        {/* <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>latest orders</h3>
            </div>
            <div className="card__body">
              <Table
                // headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                // bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Inventory;
