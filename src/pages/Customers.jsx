import React, { useEffect } from "react";

import Table from "../components/table/Table";

// import customerListJSON from "../assets/JsonData/customers-list.json";

import { UserList } from "../assets/FakeData/UserList";
import { useDispatch } from "react-redux";
import { usersActions } from "../redux/actions";
import { useSelector } from "react-redux";

const customerTableHead = [
  "",
  "profile",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>
      <img
        style={{ width: "30px", height: "30px", borderRadius: "50%" }}
        src={item.profilePicture}
        alt="profile"
      />
    </td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_order}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

// Dispatch userlist to redux

const Customers = () => {
  const customerList = useSelector((state) => state.users.customers);

  const dispatch = useDispatch();

  const storeUsersInRedux = () => {
    let users = UserList();
    dispatch(usersActions.storeUsers(users));
  };

  useEffect(() => {
    storeUsersInRedux();
  }, []);

  return (
    <div>
      <h2 className="page-header">customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              {customerList.length > 0 ? (
                <Table
                  limit="10"
                  headData={customerTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={customerList}
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

export default Customers;
