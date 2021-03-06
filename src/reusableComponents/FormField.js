import React from "react";
import { Field, ErrorMessage } from "formik";
const FormField = props => {
  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <Field
        name={props.name}
        className="formInput"
        type={props.type}
        placeholder={props.placeholder}
        id={props.name}
        value={props.value}
      />
      <div className="errorMsg">
        <ErrorMessage name={props.name} component={"div"} />
      </div>
    </div>
  );
};

export default FormField;
