import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1>Layout</h1>
      <Header />

      <Outlet />
    </>
  );
};

export default Dashboard;
