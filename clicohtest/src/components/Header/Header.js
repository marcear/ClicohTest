//react
import React from "react";
import Navbar from "../Navbar/Navbar";
//antd
import { Layout } from "antd";
//css
import "./Header.scss";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="header-main">
      <Navbar />
    </AntHeader>
  );
};

export default Header;
