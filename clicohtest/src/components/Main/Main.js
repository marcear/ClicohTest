//react
import React from "react";
//antd
import { Layout } from "antd";
//components
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
//react-router
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
//component pages
import Dolar from "../Pages/Dolar/Dolar";
import Weather from "../Pages/Weather/Weather";

const Main = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <Body>
          <Switch>
            <Route path="/" render={() => <div>Home</div>} exact />
            <Route path="/dolar" component={Dolar} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </Body>
        <Footer />
      </Layout>
    </Router>
  );
};

export default Main;
