import React from "react";
import dashboard from "../../assets/dashboard.png";

const NavBarComponent = () => {
  const items = [
    {
      title: "Dashboard",
      icon: dashboard,
    },
    {
      title: "Tasks",
      icon: dashboard,
    },
    {
      title: "Email",
      icon: dashboard,
    },
    {
      title: "Contacts",
      icon: dashboard,
    },
    {
      title: "Chats",
      icon: dashboard,
    },
    {
      title: "Deals",
      icon: dashboard,
    },
  ];
  return (
    <div className="left-bottom">
      {items.map(({title, icon})=>(
        <div className="section">
        <img
          className="dashboard-icon nav-icon"
          src={icon}
          alt="dashboard-icon"
        />
        <h5 class="nav-name">{title}</h5>
      </div>
      ))}
    
      <hr />
      <div className="section">
        <img
          className="dashboard-icon nav-icon"
          src={dashboard}
          alt="dashboard-icon"
        />
        <h5 class="nav-name">Dashboard</h5>
      </div>
    </div>
  );
};

export default NavBarComponent;









  {/* <div className="section">
        <img
          className="dashboard-icon nav-icon"
          src={dashboard}
          alt="dashboard-icon"
        />
        <h5 class="nav-name">Dashboard</h5>
      </div>
      <div className="section">
        <img
          className="dashboard-icon nav-icon"
          src={dashboard}
          alt="dashboard-icon"
        />
        <h5 class="nav-name">Dashboard</h5>
      </div>
      <div className="section">
        <img
          className="dashboard-icon nav-icon"
          src={dashboard}
          alt="dashboard-icon"
        />
        <h5 class="nav-name">Dashboard</h5>
      </div>
      <div className="section">
        <img
          className="dashboard-icon nav-icon"
          src={dashboard}
          alt="dashboard-icon"
        />
        <h5 class="nav-name">Dashboard</h5>
      </div>
      <div className="section">
        <img
          className="dashboard-icon nav-icon"
          src={dashboard}
          alt="dashboard-icon"
        />
        <h5 class="nav-name">Dashboard</h5>
      </div>
      <div className="section">
        <img
          className="dashboard-icon nav-icon"
          src={dashboard}
          alt="dashboard-icon"
        />
        <h5 class="nav-name">Dashboard</h5>
      </div> */}