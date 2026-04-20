import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      style={{
        display: "flex",
        width: "1200px",
        gap: "20px",
        border: "2px solid black",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Header;
