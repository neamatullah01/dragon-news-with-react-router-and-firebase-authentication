import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthenticationLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto pt-9">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthenticationLayout;
