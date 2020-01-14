import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../FormsControls/FormsControls";
import { required, maxLength } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "./../../redux/Auth-reduser";
import { Redirect } from "react-router-dom";
import s from "./../FormsControls/FormsControls.module.css";

const maxLength30 = maxLength(30);

let LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit} style={{width:'20%', marginLeft: '40%', color: '#fff'}}>
      <div>
        <Field
          name={"email"}
          placeholder={"email"}
          component={Input}
          validate={[required, maxLength30]} 
          className='form-control'/>
      </div>
      <div>
        <Field
          name={"password"}
          placeholder={"password"}
          component={Input}
          validate={[required, maxLength30]}
          className='form-control'
        />
      </div>
      <div><h5 style={{textAlign:'center'}}>remember Me</h5>
        <Field name={"rememberMe"} component={"input"} type={"checkbox"} className='form-control'/>{" "}
        
      </div>
      {props.captchaUrl && (
        <div>
          <img src={props.captchaUrl} alt="captcha" />
          <Field
            name={"captcha"}
            placeholder={"symbols"}
            component={Input}
            validate={[required]}
            className='form-control'
          />
        </div>
      )}
      {props.error && <div className={s.errorForm}>{props.error}</div>}
      <div>
        <button className='form-control btn btn-primary'>Login</button>
      </div>
    </form>
  );
};

let LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

let Login = props => {
  let onSubmit = formData => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) return <Redirect to="/Profile" />;
  return (
    <>
      <h1 style={{textAlign:'center', color: '#fff'}}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  };
};

export default connect(mapStateToProps, { login })(Login);
