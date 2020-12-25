import React from "react";
import "./user-info.css";

const UserInfoComponent = ({ logo, name, email }) => {
  return (
    <div className="left-top">
      <img src={logo} alt="person pp" />
      <div className="left-right">
        <h5>{name}</h5>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserInfoComponent;
