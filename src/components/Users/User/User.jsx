import React from "react";
import userPhoto from "../../../assets/images/user.png";
import Preloader from "./../../Preloader/Preloader";
import { NavLink } from "react-router-dom";

let User = props => {
  
  return props.users.map(user => {
    return (
      <div className={'jumbotron'} key={user.id} style={{display:'flex', padding:0, marginBottom: 0 }}>
        <div className={'card'} style={{width: 20+'%', background:' #1b1e21'}}>
          {props.isFetching ? (
            <Preloader />
          ) : (
            <NavLink to={"Profile/" + user.id}>
              <img
                src={user.photos.small !== null ? user.photos.small : userPhoto}
                alt="img"
                className={'card-img-top'}
                style = {{width: 50+'%', borderRadius: 50+'%', marginLeft: 25+'%'}}
              />
            </NavLink>
          )}<div className = 'card-body'>{user.followed ? (
            <button
              disabled={props.followingProgressId.some(id => id === user.id)}
              onClick={() => {
                props.unfollow(user.id);
              }}
              className = 'btn btn-outline-danger'
              style={{width: 100+'%'}}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingProgressId.some(id => id === user.id)}
              onClick={() => {
                props.follow(user.id);
              }}
              className = 'btn btn-outline-primary'
              style={{width: 100+'%'}}
            >
              Follow
            </button>
          )}</div>
          
        </div>
        <div className={'card'} style={{ padding: 1+'em', background:' #1b1e21', color: '#fff', width:80+'%',  marginBottom:0}}>
          <p><strong>{user.name}</strong></p>
          <p>{user.status !== null ? `Status: ${user.status}` : "Status"}</p>
        </div>
      </div>
    );
  });
};

export default User;
