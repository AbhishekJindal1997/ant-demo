import React, { Component } from "react";
import { Row, Col } from "antd";
import BannerImage from "../Images/bulb.jpg";
import { Typography } from "antd";

const { Title } = Typography;

const Banner = () => {
  return (
    <>
      <Row>
        <Col span={12} align='center'>
          <Title level={4}>Welcome I'M</Title>
          <Title>Abhishek Jindal</Title>
          <Title level={4}>Web Design and Developer</Title>
          <Title level={5}>Web Design and Developer</Title>
        </Col>
        <Col span={12}>
          <img src={BannerImage} width='100%' height='600px'></img>
        </Col>
      </Row>
    </>
  );
};

export default Banner;
