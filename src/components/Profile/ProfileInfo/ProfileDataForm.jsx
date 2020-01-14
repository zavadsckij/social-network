import React from "react";
import s from './../../FormsControls/FormsControls.module.css'
import { Input } from "../../FormsControls/FormsControls";
import { reduxForm, Field } from "redux-form";
import { Textarea } from './../../FormsControls/FormsControls';

const ProfileDataForm = props => {
  return (
    <form onSubmit = {props.handleSubmit}>
        <button>Save</button> {props.error && <div className = {s.errorForm}>{props.error}</div>}
      <div>
        <b>Full name: </b>
        <Field name={"fullName"} placeholder={"full name"} component={Input} />
      </div>
      <div>
        <b>looking For A Job: </b>
        <Field component={Input} type="checkbox" name={"lookingForAJob"} />
      </div>
      <div>
        <b>My professional skills:</b> <Field name={"lookingForAJobDescription"} placeholder={"skills"} component={Textarea} />
      </div>
      <div>
        <b>About me: </b> <Field name={"aboutMe"} placeholder={"about me"} component={Textarea} />
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(props.profile.contacts).map(key => {
          return <div className = {s.contact} key = {key}><b>{key} <Field name={"contacts."+key}  placeholder={key} component={Input}/></b></div>
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "editProfile" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
