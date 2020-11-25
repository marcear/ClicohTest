//react
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  contextSelector,
  login,
  setShowLoginButton,
} from "../../../reducers/contextSlice";
//antd
import { Form, Input, Button, Col, Row } from "antd";
import { useHistory, Redirect } from "react-router-dom";
//scss
import "./Login.scss";
import FormItem from "antd/lib/form/FormItem";

const Login = (props) => {
  const userContext = useSelector(contextSelector).user;
  const dispatch = useDispatch();
  const history = useHistory();

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
      span: 16,
    },
  };

  const tailLayout = {
    wrapperCol: {
      span: 24,
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

  if (userContext.logged) return <Redirect to="/admin" />;

  return (
    <Row justify="center">
      <div className="login-container">
        <Form
          {...layout}
          size="middle"
          form={form}
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
            <Button type="primary" block htmlType="submit">
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Row>
  );
};

export default Login;
