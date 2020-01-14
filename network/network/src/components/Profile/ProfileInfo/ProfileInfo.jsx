import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "./../../Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import StatusWithHooks from "./StatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

function ProfileInfo(props) {
  let [updateMode, setUpdateMode] = useState(false);
  const onMainPhotoChange = e => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = formData => {
    props.saveProfile(formData).then(() => {
      setUpdateMode(false);
    });
  };

  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div className={s.profileInfo}>
        <StatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div className={s.imgDiv}>
          <img
            src={props.profile.photos.large || userPhoto}
            alt="img"
            className={s.profilePhoto}
          />
        </div>
        {props.isOwner && (
          <div className={s.fileInput}>
            <input
              type="file"
              onChange={onMainPhotoChange}
              className="btn btn-outline-dark"
              style={{marginLeft: 33+'%', padding: 5+'px', marginTop: 0.8+'em'}}
            />
          </div>
        )}
        {updateMode ? (
          <ProfileDataForm
            initialValues={props.profile}
            profile={props.profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={props.profile}
            startEditMode={() => {
              setUpdateMode(true);
            }}
            isOwner={props.isOwner}
          />
        )}
        
      </div>
    );
  }
}

const ProfileData = props => {
  let [contactsMode, setContacts] = useState(false);
  return (
    <div>
      {props.isOwner && (
        <button onClick={props.startEditMode} className="btn btn-info">
          Edit
        </button>
      )}
      <div>
        <b>Full name: </b>
        {props.profile.fullName}
      </div>
      <div>
        <b>looking For A Job: </b>
        {props.profile.lookingForAJob ? "yes" : "no"}
      </div>
      {props.profile.lookingForAJob && (
        <div>
          <b>My professional skills:</b>{" "}
          {props.profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me: </b>
        {props.profile.aboutMe}
      </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick = {()=>setContacts(!contactsMode)}
          >
            Contacts:{" "}
          </button>
        
        {contactsMode && <div className="menu" >
          {Object.keys(props.profile.contacts).map(key => {
            return (
              <Contact
                title={key}
                value={props.profile.contacts[key]}
                key={key}
              />
            );
          })}
        </div>}
        </div>
    </div>
  );
};

export const Contact = ({ title, value }) => {
  return (
     <button className="dropdown-item" type="button" style={{color: '#ccc', width: 50+'%'}}> {title}: {value}</button>
  );
};

export default ProfileInfo;
