import React from "react";
import "./user-card.css";
import logo from "../../assets/image 2.png";
import UserInfo from "../user-info/user-info";
import { Link } from "react-router-dom";

const UserCardComponent = ({ user }) => {
  return (
    <div className="card">
      <UserInfo name={user.name} email={user.email} logo={user.logo} />
      <div className="counts">
        <p className="purple count">2222</p>
        <p className="blue count">2222</p>
        <p className="green count">2222</p>
        <p className="orange count">2222</p>
      </div>
      {/* <img className="card-pp" src={logo} alt="logo" />
      <div className="card-right">
        <p className="card-name">{name}</p>
        <p className="card-mail">{email}</p>
        <div className="counts">
          <p className="purple count">2222</p>
          <p className="blue count">2222</p>
          <p className="green count">2222</p>
          <p className="orange count">2222</p>
        </div>
      </div> */}
      <div className="card-info">
        <div className="card-structure-info">
          <h4>Struktur</h4>
          <h5>{user.structure}</h5>
        </div>
        <div className="vl"></div>
        <div className="card-position-info">
          <h4>Vəzifə</h4>
          <h5>{user.position}</h5>
        </div>
      </div>
      <div className="card-buttons">
        <Link to="/details"><button>Bax</button></Link>
        <button>Mail at</button>
      </div>
    </div>
  );
};

export default UserCardComponent;
