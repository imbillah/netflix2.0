import React, { useRef } from "react";
import useFirebase from "../config/firebase/useFirebase";
import Swal from "sweetalert2";
import styles from "./SignUp.module.css";
const SignUp = () => {
  const { registerUser, logInUser } = useFirebase();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const registerHandler = (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    if (!regex.test(user.email)) {
      Swal.fire({
        icon: "error",
        title: `Dude! don't you have an email?`,
        text: "Please provide a valid email address",
      });
    } else if (user.password.length < 6) {
      Swal.fire({
        icon: "error",
        title: `Weak Password`,
        text: "Password must be 6 characters long",
      });
    } else {
      registerUser(user.email, user.password);
    }
  };

  const logInHandler = (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    logInUser(user.email, user.password);
  };
  return (
    <div className={styles.container}>
      <h2>Sign In</h2>
      <form action="">
        <input ref={emailRef} type="email" placeholder="Email" required />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
        />

        <button type="Submit" onClick={logInHandler}>
          Sign in
        </button>
      </form>
      <p>
        New to Netflix? <span onClick={registerHandler}> Sign up here</span>
      </p>
    </div>
  );
};

export default SignUp;
