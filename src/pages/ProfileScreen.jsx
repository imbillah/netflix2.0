import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import Navbar from "../layout/Navbar";
import { subscribeData } from "../utility/subscribeplan";
import { getAuth, signOut } from "firebase/auth";
import styles from "./ProfileScreen.module.css";
const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const auth = getAuth();
  const dispatch = useDispatch();
  const userPlans = subscribeData;
  const {
    profile__container,
    user__profile,
    profile__grid,
    user__info,
    subscription__plan,
    subscription__box,
    icons,
    bg__gradient,
    sub__container,
  } = styles;
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout);
        alert("you are logged out now");
      })
      .catch((error) => {
        alert(error.massage);
      });
  };
  return (
    <Fragment>
      <Navbar />
      <div className={profile__container}>
        <div className={bg__gradient}>
          <div className={user__profile}>
            <div className={profile__grid}>
              <div className={user__info}>
                <h1 style={{ color: "yellow" }}>My profile</h1>
                <img src="./Netflix-avatar.png" alt="" />
                <h4>Email:{user?.email} </h4>
                <h3>Active plan: Basic</h3>
                <h3>Status: Expired</h3>
                <button onClick={logOut}>Sign out</button>
              </div>
              <div className={sub__container}>
                <h1 style={{ color: "yellow" }}>Choose your plan</h1>
                <div className={subscription__box}>
                  {userPlans.map((data) => (
                    <div key={data.id} className={subscription__plan}>
                      <h2>{data.category}</h2>
                      <h4>Monthly Price: ${data.price}</h4>
                      <p>Quality: {data.quality}</p>
                      <p>Resulation: {data.resulation}</p>
                      <h4>Availabe Devices</h4>
                      <div className={icons}>
                        <i className="bi bi-phone"></i>
                        <i className="bi bi-tablet-landscape"></i>
                        <i className="bi bi-laptop"></i>
                        <i className="bi bi-tv"></i>
                      </div>
                      <button>Subscribe</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileScreen;
