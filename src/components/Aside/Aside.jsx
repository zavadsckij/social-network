import React from "react";
import { NavLink } from "react-router-dom";

function Aside(props) {
  return (
    <div className={`col-xl list-group`}>
   
      <NavLink to="/Profile" className="list-group-item list-group-item-action list-group-item-dark" activeClassName='active'>
        Profile
      </NavLink>
      <NavLink to="/Messages" className="list-group-item list-group-item-action list-group-item-dark" activeClassName='active'>
      Messages
      </NavLink>
      <NavLink to="/Users" className="list-group-item list-group-item-action list-group-item-dark" activeClassName='active'>
      Users
      </NavLink>
      <NavLink to="/News" className="list-group-item list-group-item-action list-group-item-dark" activeClassName='active'>
        News
      </NavLink>
      <NavLink to="/Music" className="list-group-item list-group-item-action list-group-item-dark" activeClassName='active'>
        Music
      </NavLink>
      <NavLink to="/Settings" className="list-group-item list-group-item-action list-group-item-dark" activeClassName='active'>
        Settings
      </NavLink>
  
   
  </div>
  );
}

export default Aside;
