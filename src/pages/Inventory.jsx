import React, { useState } from "react";

import CardInventory from "../components/status-card/CardInventory";

import statusCards from "../assets/JsonData/status-card-data-inventory.json";
import AddItemModal from "../components/modalAddItem/AddItemModal";

// const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

const Inventory = () => {
  // Add a modal to add items into the inentory
  const [inventoryModal, setInventoryModal] = useState(false);

  if (inventoryModal) {
    return (
      <div>
        <div>
          <h1>Add Items to Inventory</h1>
        </div>
        <AddItemModal />
        <div>
          <button onClick={() => setInventoryModal(false)}>Close</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="page-header">Inventory</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <CardInventory
                  icon={item.icon}
                  count={item.info}
                  title={item.title}
                  setInventoryModal={setInventoryModal}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height"></div>
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
