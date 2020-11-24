//react
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contextSelector, login } from "../../../reducers/contextSlice";
//antd
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
//
import "./Login.scss";

const Login = (props) => {
  const dispatch = useDispatch();

  const formIntialValues = {
    name: "",
    password: "",
  };
  const [form] = Form.useForm();
  const [user, setUser] = useState(formIntialValues);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 8,
    },
  };

  const onLogin = () => {
    //fake login
    dispatch(login(user));
    props.history.push("/");
  };

  const handleUserChange = (propertyName) => (event) => {
    setUser({
      ...user,
      [propertyName]: event.target.value,
    });
  };

  return (
    <Form
      size="middle"
      form={form}
      {...layout}
      onFinish={onLogin}
      className="login-form"
      initialValues={formIntialValues}
    >
      <Form.Item
        label="Usuario"
        name="name"
        rules={[{ required: true, message: "Ingresar usuario" }]}
      >
        <Input onChange={handleUserChange("name")} placeholder="Usuario" />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: "Ingresar contraseña" }]}
      >
        <Input.Password
          disabled={user && user.id != null}
          onChange={handleUserChange("password")}
          placeholder="Contraseña"
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <div className="login-button">
          <Button type="primary" block htmlType="submit">
            Ingresar
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Login;
