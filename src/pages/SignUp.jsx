import React from "react";
import styles from "./SignUp.module.css";
const SignUp = () => {
  const { container } = styles;

  const register = (e) => {
    e.preventDefault();
    console.log("I clicked");
  };

  const logIn = (e) => {
    e.preventDefault();
    console.log("I clicked");
  };
  return (
    <div className={container}>
      <h2>Sign In</h2>
      <form action="">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="Submit" onClick={logIn}>
          Sign in
        </button>
      </form>
      <p>
        New to Netflix? <span onClick={register}> Sign up here</span>
      </p>
    </div>
  );
};

export default SignUp;
