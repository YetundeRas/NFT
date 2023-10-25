import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Collection from "./pages/collection/Collection";
import Signin from "./pages/sign in/Signin";
import Community from "./pages/community/Community";
import Create from "./pages/create/Create";
import About from "./pages/about/About";
import Signup from "./pages/sign up/Signup";
import App from "./App";

export const Myroute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create />} />
            <Route path="/community" element={<Community />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};


