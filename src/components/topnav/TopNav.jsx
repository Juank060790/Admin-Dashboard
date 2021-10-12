import React, { useEffect } from "react";

import "./topnav.css";

import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";

import ThemeMenu from "../thememenu/ThemeMenu";

import notifications from "../../assets/JsonData/notification.json";

import user_menu from "../../assets/JsonData/user_menus.json";

import { useDispatch } from "react-redux";

import { logoutUser } from "../../redux/actions/auth.actions";

const curr_user = {
  display_name: "Juan Ca",
  // image: user_image
};

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item?.icon}></i>
    <span>{item?.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index, HandleLogOut) => {
  return (
    <>
      {item.content === "Logout" ? (
        <Link to="/" key={index}>
          <div onClick={() => HandleLogOut()} className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
          </div>
        </Link>
      ) : (
        <Link to={item.link} key={index}>
          <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
          </div>
        </Link>
      )}
    </>
  );
};

const Topnav = () => {
  useEffect(() => {
    renderNotificationItem();
    console.log("Topnav");
  }, []);

  const dispatch = useDispatch();
  const HandleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) =>
              renderUserMenu(item, index, HandleLogOut)
            }
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
          {/* dropdown here */}
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
