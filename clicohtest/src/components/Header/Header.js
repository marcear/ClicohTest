//react
import React from "react";
import Navbar from "../Navbar/Navbar";
//antd
import { Layout } from "antd";
//css
import "./Header.scss";
//components
import StickyHeader from "../StickyHeader/StickyHeader";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <StickyHeader>
      <AntHeader className="header-main">
        <Navbar />
      </AntHeader>
    </StickyHeader>
  );
};

export default Header;
