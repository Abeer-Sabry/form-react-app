import React from "react";
import { Field, ErrorMessage } from "formik";
const FormField = props => {
  return (
    <>
      <label htmlFor={props.name}>{props.name}</label>
      <Field
        name={props.name}
        className="formInput"
        type={props.type}
        id={props.name}
        value={props.value}
      />
      <div className="errorMsg">
        <ErrorMessage name={props.name} component={"div"} />
      </div>
    </>
  );
};

export default FormField;
