import React from "react";

import firebase from "firebase/compat/app";
import { auth } from "../firebase";

//Icons
import google from "../assets/google.svg";

//Styles
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>wellcome to Honygram</h2>
        <div
          className={styles.button}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <img src={google} alt="google-img" />
          login with google acount
        </div>
      </div>
    </div>
  );
};

export default Login;
