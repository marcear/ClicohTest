import React from "react";
import { Menu } from "antd";
//react router
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="dolar">
        <Link to="/dolar">Dolar</Link>
      </Menu.Item>
      <Menu.Item key="weather">
        <Link to="/weather">weather</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
