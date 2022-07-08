# Getting Started with Create React App

this is a form react app basically structured on firebase authentication 

consist of of 

1-scr file divided to three folders

---- components folder which contains

-Header component for app header

-AuthForm component which contains 
   the main app form with validation which created by formik and Yup 
   It containins signup with google method and signup with facebook method
   please Note when you enter your phone number with +2 pattern
   when you submit successfully the phoneNumber auth will be shown
   
-VerifyCard component which responsible for 
   phoneNumber Auth
   Otp Request and Verification code 
   this component opened after form submission 
   this component contains OTP request and verification method
   if the verification has been Done successfully,
   the same component will be responsible for showing congratulation div
   
   
   2-firebase.js file which contains firebase config and db 
   
