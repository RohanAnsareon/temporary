import React from "react";
import logo from "../../assets/Vector.png"

const HeaderComponent = () => {
  return (
    <div>
      <div className="right-corner">
        <img src={logo} alt="pp" />
      </div>
      <hr />
    </div>
  );
};

export default HeaderComponent;
