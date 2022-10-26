import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../components/Home/HomeScreen";
import { login, logout, selectUser } from "../features/userSlice";
import LoginScreen from "../pages/LoginScreen";
import ProfileScreen from "../pages/ProfileScreen";
export const Index = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = useSelector(selectUser);
  //tracking user info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<HomeScreen />} />
        ) : (
          <Route path="/" element={<LoginScreen />} />
        )}
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
