# Getting Started with Create React App

this is a form react app basically structured on firebase authentication 

consist of of 

1-scr file divided to three folders

---- components folder which contains

-Header component for app header

-AuthForm component which contains 
   the main app form with validation which created by formik and Yup,
   please Note when you enter your phoneNumber enter it with +2 pattern,
   when you submit successfully the phoneNumber auth will be shown,
   It contains signup with google and signup with facebook methods
   
-VerifyCard component which responsible for 
   phoneNumber Auth,
   Otp Request and Verification code ,
   this component opened after form submission ,
   this component contains OTP request and verification method,
   if the verification has been Done successfully,
   the same component will be responsible for showing congratulation div,
   
 ---- ReusableComponents folder which contains
   FormField Component  which render formik field For the form 
   selectField Component  which render select field for the form  
  
 ---- Redux folder which contains
      userSlice which holds states responsible for holding form data and open/close otp request div
   
 ---- Assets folder which contains
   images for the app cover
 
 
 
   2-firebase.js file which contains firebase config and db 
   
