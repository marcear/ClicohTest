import React, { useState } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  contextSelector,
  logout,
  setShowLoginButton,
} from "../../reducers/contextSlice";
//antd
import { Menu, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
//react router
import { Link, Redirect, useHistory } from "react-router-dom";
//scss
import "./Navbar.scss";

const Navbar = () => {
  const { user } = useSelector(contextSelector);
  const [showLoginButton, setShowLoginButton] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowLogin = () => {
    setShowLoginButton(false);
    history.push("/login");
  };

  const handleSingOff = () => {
    setShowLoginButton(true);
    dispatch(logout());
  };

  const userMenu = (
    <Menu>
      <Menu.Item onClick={handleSingOff}>Cerrar sesion</Menu.Item>
    </Menu>
  );

  return (
    <Menu mode="horizontal" defaultSelectedKeys={[history.location.pathname]}>
      <Menu.Item key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/dolar">
        <Link to="/dolar">Dolar</Link>
      </Menu.Item>
      <Menu.Item key="/weather">
        <Link to="/weather">Clima</Link>
      </Menu.Item>
      {user.logged && user.role === "admin" ? (
        <Menu.Item key="/admin">
          <Link to="/admin">Admin usuarios</Link>
        </Menu.Item>
      ) : null}

      <div style={{ float: "right" }}>
        {user.logged && (
          <div className="navbar-usermenu">
            <Dropdown.Button
              overlay={userMenu}
              placement="bottomRight"
              icon={<UserOutlined />}
            >
              {user.name}
            </Dropdown.Button>
          </div>
        )}
        {!user.logged && showLoginButton && (
          <Button type="link" onClick={handleShowLogin}>
            Ingresar
          </Button>
        )}
      </div>
    </Menu>
  );
};

export default Navbar;
