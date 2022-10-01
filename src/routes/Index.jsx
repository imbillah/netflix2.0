import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../components/Home/HomeScreen";
import LoginScreen from "../pages/LoginScreen";
export const Index = () => {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<HomeScreen />} />
        ) : (
          <Route path="/" element={<LoginScreen />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
