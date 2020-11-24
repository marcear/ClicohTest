//react
import React, { useState, useEffect } from "react";
//antd
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
//
import "./Login.scss";

const Login = (props) => {
  const formIntialValues = {
    user: "",
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

  const onSubmit = () => {
    props.onSubmit(user);
  };

  const handleUserChange = (propertyName) => (event) => {
    setUser({
      ...user,
      [propertyName]: event.target.value,
    });
  };

  const handleUserRoleChange = (role) => {
    setUser({
      ...user,
      role: role,
    });
  };

  //   useEffect(() => {
  //     form.setFieldsValue({
  //       email: user.email,
  //       password: user.password,
  //       role: user.role,
  //       name: user.name,
  //       lastname: user.lastname,
  //     });
  //   }, [user]);

  return (
    <Form
      size="middle"
      form={form}
      {...layout}
      onFinish={onSubmit}
      className="login-form"
      initialValues={formIntialValues}
    >
      <Form.Item
        label="Usuario"
        name="user"
        rules={[
          {
            message: "No es un email válido",
          },
          { required: true, message: "Ingresar usuario" },
        ]}
      >
        <Input onChange={handleUserChange("email")} placeholder="Usuario" />
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
