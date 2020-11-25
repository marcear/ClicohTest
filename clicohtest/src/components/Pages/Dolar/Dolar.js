//react
import React, { useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchDolar, dolarSelector } from "../../../reducers/dolarSlice";
import { Tabs, Row, Col, Statistic, Spin, Divider } from "antd";

const Dolar = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(dolarSelector);
  const { TabPane } = Tabs;

  useEffect(() => {
    dispatch(fetchDolar());
  }, []);

  if (!data.length) return null;

  const TabDetail = ({ cotDetail }) => {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Precio compra"
            value={
              cotDetail.compra === "No Cotiza"
                ? "Sin cotizacion"
                : `$${cotDetail.compra}`
            }
          />
          <Statistic title="Precio venta" value={`$${cotDetail.venta}`} />
        </Col>
        <Col span={12}>
          <Statistic title="Variacion" value={cotDetail.variacion} />
        </Col>
      </Row>
    );
  };

  const DolarTabs = () => (
    <Tabs defaultActiveKey="1">
      {data.map((dolarItem, key) => (
        <TabPane tab={dolarItem.casa.nombre} key={key + 1}>
          <TabDetail cotDetail={dolarItem.casa} />
        </TabPane>
      ))}
    </Tabs>
  );

  if (loading)
    return (
      <div className="loading">
        <Spin tip="Cargando cotizaciones" />
      </div>
    );

  return (
    <>
      <Divider orientation="left">Cotización por tipo de dolar</Divider>
      <DolarTabs />
    </>
  );
};

export default Dolar;
