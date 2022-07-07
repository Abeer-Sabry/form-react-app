import { auth } from "../../firebase";
import { FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const signUpWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;

      // setUser(user);
      console.log("response", user);
    })
    .catch(err => {
      console.log("err", err);
    });
};
