import React from "react";
import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
  return (
    <div>
        <textarea {...input} {...props} className = {'form-control'||(hasError ? s.errorField: undefined )} />
        <div className = {hasError ? s.errorMessage: ""}>{hasError && meta.error}</div>
    </div>
  );
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
  return (
    <div>
        <input {...input} {...props} className = {'form-control'||(hasError ? s.errorField: undefined ) } style={{marginBottom: '.5em'}}/>
        <div className = {hasError ? s.errorMessage: undefined }>{hasError && meta.error}</div>
    </div>
  );
};
