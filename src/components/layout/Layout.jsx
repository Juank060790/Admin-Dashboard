import React, { useEffect } from "react";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import Routes from "../Routes";

import { BrowserRouter, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";
import LoginPage from "../../containers/Login/LoginPage";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      {!isAuthenticated ? (
        <Route path="/" component={LoginPage}></Route>
      ) : (
        <>
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <div className="layout__content_TopNav">
              <TopNav />
            </div>
          </div>

          <Route
            path="/"
            render={(props) => (
              <div
                className={`layout ${themeReducer.mode} ${themeReducer.color}`}
              >
                <Sidebar {...props} />
                <div className="layout__content">
                  {/* <TopNav /> */}
                  <div className="layout__content-main">
                    <Routes />
                  </div>
                </div>
              </div>
            )}
          />
        </>
      )}
    </BrowserRouter>
  );
};

export default Layout;
