import React from "react";

import StatusCard from "../status-card/StatusCard";
import "./studentList.css";
import courses from "../../assets/JsonData/courses.json";

const Studentlistpanel = () => {
  return (
    <div>
      <div>
        <div>
          <h1>List of Students </h1>
        </div>

        <div>
          <div className="  badge-container">
            <div className=" col-5">
              {courses.map((item, index) => (
                <StatusCard title={item.title} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentlistpanel;
