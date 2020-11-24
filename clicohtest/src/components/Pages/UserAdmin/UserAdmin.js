//react
import React, { useEffect, useState } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  usersSelector,
  usersSlice,
} from "../../../reducers/userSlice";
//antd
import { Row, Col, Table, Tag, Space } from "antd";

const Weather = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(usersSelector);

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
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <Table columns={columns} dataSource={users} pagination={false} />;
};

export default Weather;
