import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" elemnt={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
