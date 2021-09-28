import React, { useEffect } from "react";

import Table from "../components/table/Table";

// import customerListJSON from "../assets/JsonData/customers-list.json";

import { ProductList } from "../assets/FakeData/ProductList";
import { useDispatch } from "react-redux";
import { productActions } from "../redux/actions";
import { useSelector } from "react-redux";

const customerTableHead = [
  "",
  "Category",
  "Item",
  "Details",
  "Price",
  "InStock",
  "Items Sold",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.category}</td>
    <td>{item.item}</td>
    <td>{item.description}</td>
    <td>{item.price}</td>
    <td>{item.in_stock}</td>
    <td>{item.item_sold}</td>
  </tr>
);

// Dispatch userlist to redux

const Products = () => {
  const productList = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const storeUsersInRedux = () => {
    let products = ProductList();
    dispatch(productActions.storeProducts(products));
  };

  useEffect(() => {
    storeUsersInRedux();
  }, []);

  return (
    <div>
      <h2 className="page-header">Products</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              {productList.length > 0 ? (
                <Table
                  limit="10"
                  headData={customerTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={productList}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
