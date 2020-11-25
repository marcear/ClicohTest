//react
import React from "react";
//antd
import { Layout } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
//scss
import "./Footer.scss";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="footer-main">
      Test Clicoh - Marcelo Arias
      <div className="icons-list">
        <a href="https://github.com/marcear" target="_blank">
          <GithubOutlined />
        </a>
        <a href="https://www.linkedin.com/in/marceloarias2020/" target="_blank">
          <LinkedinOutlined />
        </a>
      </div>
    </AntFooter>
  );
};

export default Footer;
