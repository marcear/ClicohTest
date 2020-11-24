import React from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { contextSelector } from "../../reducers/contextSlice";
//antd
import { Menu, Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
//react router
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector(contextSelector);
  debugger;
  const dispatch = useDispatch();

  const menu = (
    <Menu>
      <Menu.Item>Cerrar sesion</Menu.Item>
    </Menu>
  );

  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="dolar">
        <Link to="/dolar">Dolar</Link>
      </Menu.Item>
      <Menu.Item key="weather">
        <Link to="/weather">Weather</Link>
      </Menu.Item>
      <Menu.Item key="admin">
        <Link to="/admin">Admin</Link>
      </Menu.Item>
      <div style={{ float: "right" }}>
        {user.logged ? (
          <Dropdown.Button
            overlay={menu}
            placement="bottomRight"
            icon={<UserOutlined />}
          >
            Admin
          </Dropdown.Button>
        ) : (
          <Link to="/login">Ingresar</Link>
        )}
      </div>
    </Menu>
  );
};

export default Navbar;
