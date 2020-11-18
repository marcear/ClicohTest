//react
import React from "react";
//antd
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const Main = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Main;
