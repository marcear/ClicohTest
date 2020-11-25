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
import { NavLink, useHistory } from "react-router-dom";
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
    history.push("/");
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
        <NavLink to="/" exact>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/dolar">
        <NavLink to="/dolar">Dolar</NavLink>
      </Menu.Item>
      <Menu.Item key="/weather">
        <NavLink to="/weather">Clima</NavLink>
      </Menu.Item>
      {user.logged && user.role === "admin" ? (
        <Menu.Item key="/admin">
          <NavLink to="/admin">Admin usuarios</NavLink>
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
