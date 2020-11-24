//react
import React from "react";
//antd
import { Layout } from "antd";
//components
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
//react-router
import { Switch, Route, Redirect } from "react-router-dom";
//component pages
import Home from "../Pages/Home/Home";
import Dolar from "../Pages/Dolar/Dolar";
import Weather from "../Pages/Weather/Weather";
import Login from "../Pages/Login/Login";
import UserAdmin from "../Pages/UserAdmin/UserAdmin";
//redux
import { useSelector } from "react-redux";
//reducers
import { contextSelector } from "../../reducers/contextSlice";

const Main = () => {
  const { user } = useSelector(contextSelector);

  return (
    <Layout>
      <Header />
      <Body>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/dolar" component={Dolar} />
          <Route path="/weather" component={Weather} />
          <Route
            path="/admin"
            render={({ location }) =>
              user && user.role === "admin" ? (
                <UserAdmin />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location },
                  }}
                />
              )
            }
          />
          <Route path="/login" component={Login} />
        </Switch>
      </Body>
      <Footer />
    </Layout>
  );
};

export default Main;
