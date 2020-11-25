import React from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { contextSelector, logout } from "../../reducers/contextSlice";
//antd
import { Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
//react router
import { Link, useHistory } from "react-router-dom";

const Navbar = (props) => {
  const { user } = useSelector(contextSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const menu = (
    <Menu>
      <Menu.Item onClick={() => dispatch(logout())}>Cerrar sesion</Menu.Item>
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
        {user.logged ? (
          <Dropdown.Button
            overlay={menu}
            placement="bottomRight"
            icon={<UserOutlined />}
          >
            {user.name}
          </Dropdown.Button>
        ) : (
          <Link to="/login">Ingresar</Link>
        )}
      </div>
    </Menu>
  );
};

export default Navbar;
