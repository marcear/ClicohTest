//react
import React, { useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  usersSelector,
  deleteUser,
} from "../../../reducers/userSlice";
//antd
import { Row, Col, Table, Tag, Space, Spin, Popconfirm } from "antd";

const UserAdmin = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(usersSelector);

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Genero",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => {
        switch (gender) {
          case "male":
            return "Masculino";
          case "female":
            return "Femenino";
          default:
            return "N/A";
        }
      },
    },
    {
      title: "Color de ojos",
      dataIndex: "eye_color",
      key: "eye_color",
      render: (eye_color) => (
        <>
          <Tag color={eye_color} key={eye_color}>
            {eye_color.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Acciones",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm
            cancelText="NO"
            okText="SI"
            title="Esta seguro que desea borrarlo?"
            onConfirm={() => dispatch(deleteUser(record))}
          >
            <a>Borrar</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading)
    return (
      <div className="loading">
        <Spin tip="Cargando usuarios" />
      </div>
    );

  return <Table columns={columns} dataSource={users} pagination={false} />;
};

export default UserAdmin;
