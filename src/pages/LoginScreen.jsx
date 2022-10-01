import React from "react";
import { useState } from "react";
import Navbar from "../layout/Navbar";
import styles from "./LoginScreen.module.css";
import SignUp from "./SignUp";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const { banner, contents, container, btn, flex_box } = styles;
  return (
    <div className={banner}>
      <Navbar setSignIn={setSignIn} />
      <div className={container}>
        {signIn ? (
          <SignUp />
        ) : (
          <div className={contents}>
            <h1>
              Unlimited movies,TV<br></br>shows, and more.
            </h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className={flex_box}>
              <input type="email" placeholder="Email Address" />
              <button onClick={() => setSignIn(true)} className={btn}>
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
