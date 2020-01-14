import React from "react";
import s from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

function Dialog(props) {
    
  let path = "/Messages/" + props.id;
  return (
    <div className="card mb-3">
    <div className="row no-gutters">
      <div className="col-md-4">
      <img alt="avatar" src={props.url} className={s.dialogImg}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
        <NavLink to={path}  className='card-text' style={{color: 'black'}}>
          {props.name}
        </NavLink>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Dialog;
