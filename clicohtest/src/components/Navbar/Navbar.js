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
import {
  UserOutlined,
  HomeOutlined,
  DollarCircleOutlined,
  AntCloudOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
//react router
import { NavLink, useHistory } from "react-router-dom";
//scss
import "./Navbar.scss";
//custom hook
import useWindowsSize from "../../custom-hooks/useWindowsSize";
import Home from "../Pages/Home/Home";

const Navbar = () => {
  const { user } = useSelector(contextSelector);
  const [showLoginButton, setShowLoginButton] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const [width, height] = useWindowsSize();

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

  const mobileMenu = (
    <Menu mode="horizontal" defaultSelectedKeys={[history.location.pathname]}>
      <Menu.Item key="/">
        <NavLink to="/" exact>
          <HomeOutlined className="navbar-mobile-icon" />
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/dolar">
        <NavLink to="/dolar">
          <DollarCircleOutlined className="navbar-mobile-icon" />
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/weather">
        <NavLink to="/weather">
          <AntCloudOutlined className="navbar-mobile-icon" />
        </NavLink>
      </Menu.Item>
      {user.logged && user.role === "admin" ? (
        <Menu.Item key="/admin">
          <NavLink to="/admin">
            <UsergroupDeleteOutlined className="navbar-mobile-icon" />
          </NavLink>
        </Menu.Item>
      ) : null}

      <div style={{ float: "right" }}>
        {user.logged && (
          <div className="navbar-usermenu">
            <Dropdown.Button
              overlay={userMenu}
              placement="bottomRight"
              icon={<UserOutlined className="navbar-mobile-icon" />}
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

  return width < 760 ? (
    mobileMenu
  ) : (
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
