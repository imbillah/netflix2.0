import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../layout/Navbar.module.css";
const Navbar = ({ setSignIn }) => {
  const [show, setShow] = useState(false);
  const { nav_items, nav_logo, signin_btn, nav_bar, nav_black } = styles;

  const navTransition = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navTransition);
  }, []);
  return (
    <>
      <div className={`${nav_bar} ${show && nav_black}`}>
        <div className={nav_items}>
          <Link to="/">
            <img
              className={nav_logo}
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="netflix-logo"
            />
          </Link>
          <div className={signin_btn}>
            <button onClick={() => setSignIn(true)}>SIGN IN</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
