import React from "react";
import { Field, ErrorMessage } from "formik";
const SelectField = ({ name, type, options }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <Field as="select" name={name} className="formInput" type={type} id={name}>
        {options.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Field>
      <div className="errorMsg">
        <ErrorMessage name={name} component={"div"} />
      </div>
    </>
  );
};

export default SelectField;
