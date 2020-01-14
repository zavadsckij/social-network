import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import PostsContainer from './Posts/PostsContainer';


function Profile(props) {
  return (
    <div className={s.profile}>
      <ProfileInfo profile = {props.profile}
       status={props.status}
        updateStatus={props.updateStatus}
        isOwner= {!props.match.params.userId}
        savePhoto = {props.savePhoto}
        saveProfile = {props.saveProfile}
        />{!props.match.params.userId &&
        <PostsContainer profile = {props.profile}/>}
    </div>
  );
}

export default Profile;
