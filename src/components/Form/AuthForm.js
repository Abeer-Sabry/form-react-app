import React, { useState } from "react";
// ---Formik
import { Formik, Form } from "formik";
import * as Yup from "yup";
// ---- Reusable-Component
import FormField from "../../reusableComponents/FormField";
import SelectField from "../../reusableComponents/SelectField";
// --- Firebase
import { auth, collRef } from "../../firebase";
import { addDoc } from "firebase/firestore";
// ---Firebase-auth
import { FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// ---- Redux
import { useDispatch } from "react-redux";
import { getUserInfo, showPopUp } from "../../Redux/userslice";
// ---- React-Icons
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const AuthForm = () => {
  const dispatch = useDispatch();
  // Responsible-For-Holding-form-data
  const [user, setUser] = useState({});
  // FaceBook Register
  const signUpWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then(re => {})
      .catch(err => {});
  };
  //Google Register
  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  // Responsible-For-Select-Options-Arr
  const optionsArr = ["select an option", "html", "css", "javascript", "React js", "Redux"];
  // Values
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    nationalID: "",
    email: "",
    addressOne: "",
    addressTwo: "",
    linkedIn: "",
    twitter: "",
    facebook: "",
    courses: "",
  };
  // Validation
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("FirstName Is Required"),
    middleName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("middleName Is Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("lastName Is Required"),
    email: Yup.string().email("Invalid email address").required("email Is Required"),
    phoneNumber: Yup.number().required("PhoneNumber Is Required").positive().integer(),
    nationalID: Yup.number().required(" NationalID Is Required").positive().integer(),
    addressOne: Yup.string().required(" Address1 Is Required"),
    addressTwo: Yup.string().required(" Address2 Is Required"),
    linkedIn: Yup.string().required(" Linkedin Profile Is Required").url(),
    twitter: Yup.string().required(" Twitter  Profile Is Required").url(),
    facebook: Yup.string().required(" facebook  Profile Is Required").url(),
    courses: Yup.string().required("courses Is Required"),
  });
  return (
    <div className="formContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          addDoc(collRef, values);
          dispatch(getUserInfo(values));
          dispatch(showPopUp());
          resetForm();
        }}
      >
        <Form>
          <div className="namesDiv">
            <FormField name="firstName" type="text" value={user && user.displayName} />
            <FormField name="middleName" type="text" />
            <FormField name="lastName" type="text" />
          </div>
          <div className="formDetails">
            <FormField name="phoneNumber" type="text" />
            <FormField name="nationalID" type="text" />
          </div>
          <FormField name="email" type="email" value={user && user.email} />
          <div className="formDetails">
            <FormField name="addressOne" type="text" />
            <FormField name="addressTwo" type="text" />
          </div>
          <FormField name="linkedIn" type="text" />
          <div className="formDetails">
            <FormField name="twitter" type="text" />
            <FormField name="facebook" type="text" />
          </div>
          <SelectField name="courses" type="" options={optionsArr} />
          <div style={{ textAlign: "right" }}>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>

      <div className="socialButton">
        <button onClick={signUpWithFacebook}>
          <span>
            <FaFacebookF />
          </span>{" "}
          signUp With Facebook
        </button>
        <button onClick={signUpWithGoogle}>
          <span>
            <FaGoogle />
          </span>{" "}
          signUp With Google
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
