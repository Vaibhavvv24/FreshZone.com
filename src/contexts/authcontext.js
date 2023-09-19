import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  FacebookAuthProvider,
  //   RecaptchaVerifier,
  //   signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "./firebase";

const authContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function Login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  function FacebookSignIn() {
    const FaceAuthProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, FaceAuthProvider);
  }
  function Reset(email) {
    return sendPasswordResetEmail(auth, email);
  }
  //   function setUpRecapcha(number) {
  //     const recaptchaVerifier = new RecaptchaVerifier(
  //       "recaptcha-container",
  //       {},
  //       auth
  //     );

  //     recaptchaVerifier.render();
  //     return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  //   }

  useEffect(function () {
    const unsub = onAuthStateChanged(auth, (current) => {
      setUser(current);
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <authContext.Provider
      value={{
        signup,
        Login,
        user,
        logOut,
        googleSignIn,
        Reset,
        FacebookSignIn,
        // setUpRecapcha,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
function UseAuth() {
  const context = useContext(authContext);
  return context;
}
export { AuthProvider, UseAuth };
