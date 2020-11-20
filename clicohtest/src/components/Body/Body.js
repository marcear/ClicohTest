//react
import React from "react";
//antd
import { Layout, con } from "antd";
import "./Body.scss";

const { Content } = Layout;

const Body = (props) => {
  return <Content className="body-content">{props.children}</Content>;
};

export default Body;
