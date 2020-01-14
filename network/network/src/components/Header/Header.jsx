import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

let Header = props => {
  return (
    <div className={s.header} role="alert">
      <NavLink to='/Profile'><img
        alt="logo"
        src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c341.png"
        className = {s.headerLogo}
      /></NavLink>
      <div className={s.auth}>
        {props.isAuth ? (
          <h1>
            {props.login}{" "}
            <button onClick={props.logout} className="btn btn-outline-danger">
              Log Out{" "}
            </button>
          </h1>
        ) : (
          <NavLink to="/Login" className = 'btn btn-outline-primary'>LOGIN</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
