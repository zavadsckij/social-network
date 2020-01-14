import React from "react";
import s from "./Users.module.css";
import User from './User/User.jsx'

import Paginator from "../Paginator/Paginator";

let Users = (props) => {
  
    return (
      <div className={s.users}>
        <Paginator onPageChange = {props.onPageChange}
                  currentPage = {props.currentPage}
                  totalItemsCount={props.totalUsersCount}
                  count={props.count}
                  portionSize = {10}/>
        {<User {...props}/>}
      </div>
    );
  }

export default Users;
