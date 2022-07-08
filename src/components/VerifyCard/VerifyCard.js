import React, { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// --- Firebase
import { auth } from "../../firebase";
// ---Firebase-auth
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { closePopUp } from "../../Redux/userslice";
// ---React-Icons
import { AiOutlineClose } from "react-icons/ai";

const VerifyCard = () => {
  // ReduxState
  //  {userInfo} Responsible-For-Holding-Form-Data
  // {show} Responsible-For-Overlay-Div-Show
  const { userInfo, show } = useSelector(state => state.user);
  const dispatch = useDispatch();
  // UseState
  // Responsible-for-Input-Value
  const [otp, setOtp] = useState("");
  // Responsible-for-Verify-Input-show
  const [verify, setVerify] = useState(false);
  // Responsible-for-Congratulation-Div-show
  const [cong, setCong] = useState(false);
  // OTP-Request
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recapcha-container",
      {
        size: "invisible",
        callback: response => {},
      },
      auth
    );
  };
  const requestOTP = () => {
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    const phoneNumber = userInfo && userInfo.phoneNumber;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        setVerify(true);
      })
      .catch(error => {
        console.log("err", error);
      });
  };
  // Verify-Enter-Code
  const verifyOtp = e => {
    let otpVal = e.target.value;
    setOtp(otpVal);
    if (otpVal.length === 6) {
      // verifyOtp
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otpVal)
        .then(result => {
          const user = result.user;
          setCong(!cong);
          console.log("user", user);
        })
        .catch(error => {});
    }
  };

  return (
    <>
      {show && (
        <div className="overlay">
          <div id="recapcha-container"></div>
          {userInfo && (
            <div className="verifyDiv" style={{ position: "relative" }}>
              <span
                onClick={() => dispatch(closePopUp())}
                style={{ position: "absolute", top: "10px", right: "20px" }}
              >
                <AiOutlineClose />
              </span>
              {cong ? (
                <h2 style={{ color: "#5d26c1", textTransform: "capitalize" }}>
                  congratulation you signedUp
                </h2>
              ) : (
                <>
                  <h2
                    style={{ color: "#5d26c1", textTransform: "capitalize", marginBottom: "20px" }}
                  >
                    verify your phoneNumber
                  </h2>
                  <input
                    style={{
                      width: "100%",
                      padding: "15px 10px",
                    }}
                    type="text"
                    value={userInfo.phoneNumber}
                  />
                  {verify && (
                    <input
                      style={{
                        width: "100%",
                        padding: "15px 10px",
                      }}
                      type="text"
                      placeholder="Enter Verify Code"
                      value={otp}
                      onChange={verifyOtp}
                    />
                  )}
                  <button onClick={requestOTP}>requestOTP</button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default VerifyCard;
