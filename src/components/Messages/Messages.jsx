import React from "react";
import s from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import { Field, reduxForm } from "redux-form";
import { Textarea } from './../FormsControls/FormsControls';
import { required, maxLength } from "../../utils/validators";

function Message(props) {
  return <div className={`list-group-item`}>{props.message}</div>;
}

const maxLength20 = maxLength(20)

const FormMessage = props => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <div>
        <Field
         validate = {[required, maxLength20]}
          component={Textarea}
          placeholder="write something"
          name="formMessage"
          style={{resize:'none'}}
        />
      </div>
      <div>
        <button className = 'btn btn-success' style={{marginTop: '1em'}}>Send Message</button>
      </div>
    </form>
  );
};

const FormMessageRedux = reduxForm({form: "formMessage"})(FormMessage)

function Messages({ messagesPage, sendMessage}) {

  let addMessage = (values) => {
    sendMessage(values.formMessage);
  };

  let DialogsElements = messagesPage.dialogsData.map(i => {
    return <Dialog id={i.id} name={i.name} url={i.url} key = {i.id}/>;
  });
  let MessageElements = messagesPage.messagesData.map(i => {
    return <Message message={i.message} key = {i.id} id={i.id}/>;
  });
  return (
    <div className={s.messages}>
      <div className={`list-group ${s.dialogs}`}>{DialogsElements}</div>
      <div className={`list-group ${s.dialogsItems}`}>
        <div className = {s.messagesData}>{MessageElements}</div>
        <div><FormMessageRedux onSubmit = {addMessage}/></div>
      </div>
    </div>
  );
}

export default Messages;
