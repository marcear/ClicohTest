//react
import React, { useEffect, useState } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather, weatherSelector } from "../../../reducers/weatherSlice";
import FormItem from "antd/lib/form/FormItem";
//antd
import { Row, Col, Statistic, Button, Spin, Select, Form, Input } from "antd";
//css
import "./Weather.scss";

const Weather = () => {
  const { data, loading } = useSelector(weatherSelector);
  const dispatch = useDispatch();
  const { Option } = Select;
  const { Search } = Input;
  const [selectedMetricSystem, setSelectedMetricSystem] = useState("kelvin");
  const [countryQuery, setCountryQuery] = useState("");

  const handleMetricSystemChange = (value) => {
    setSelectedMetricSystem(value);
  };

  useEffect(() => {
    dispatch(
      fetchWeather({
        cityName: countryQuery.length ? countryQuery : "buenos aires",
        metricSystem: selectedMetricSystem,
      })
    );
  }, [selectedMetricSystem]);

  if (loading)
    return (
      <div className="weather-loading">
        <Spin tip="Cargando clima" />
      </div>
    );

  return (
    <>
      <Row gutter={16}>
        <Col>
          <FormItem label="Sistema metrico">
            <Select
              style={{ width: 120, paddingBottom: 10 }}
              onChange={handleMetricSystemChange}
              value={selectedMetricSystem}
              defaultValue="kelvin"
            >
              <Option value="kelvin">Kelvin</Option>
              <Option value="metric">Metrico</Option>
              <Option value="imperial">Imperial</Option>
            </Select>
          </FormItem>
        </Col>
        <Col>
          <FormItem label="City">
            <Search
              placeholder="buscar por pais/ciudad"
              onChange={(e) => setCountryQuery(e.target.value)}
              onSearch={(query) =>
                dispatch(
                  fetchWeather({
                    cityName: query,
                    metricSystem: selectedMetricSystem,
                  })
                )
              }
            />
          </FormItem>
        </Col>
      </Row>
      {data && (
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Ciudad" value={data.name} />
            <Statistic title="Temp min" value={data.main.temp_min} />
            <Statistic title="Temp max" value={data.main.temp_max} />
            <Statistic
              title="Descripcion"
              value={data.weather[0].description}
            />
            <Statistic title="Clima" value={data.weather[0].main} />
          </Col>
          <Col span={12}>
            <Statistic title="Pais" value={data.sys.country} />
            <Statistic
              title="Temperatura"
              value={data.main ? `${data.main.temp}°` : "0°"}
              precision={2}
            />
            <Statistic
              title="Presion"
              value={data.main.pressure}
              precision={2}
            />
            <Statistic
              title="Humedad"
              value={data.main.humidity}
              precision={2}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default Weather;
