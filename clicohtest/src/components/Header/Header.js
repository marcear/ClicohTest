//react
import React from "react";
import Navbar from "../Navbar/Navbar";
//antd
import { Layout } from "antd";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader>
      <Navbar />
    </AntHeader>
  );
};

export default Header;
