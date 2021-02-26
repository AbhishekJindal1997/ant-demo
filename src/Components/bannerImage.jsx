import React, { Component } from "react";
import { Row, Col } from "antd";
import BannerImage from "../Images/bannerImage3.jpeg";
import { Typography } from "antd";
import { Button } from "antd";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Banner = () => {
  return (
    <>
      <Row>
        <Col span={12} className='bannerimg'>
          <img src={BannerImage} width='135%' height='800px'></img>
        </Col>

        <Col span={12}>
          <div className='bannerIntro'>
            <Title level={4}>Welcome I'M</Title>
            <Title>ABHISHEK JINDAL</Title>
            <Title level={4}>Web Design and UX Designer</Title>
            <Title level={5}>
              Hard-Working, Highly-Motivated, meticulous Full-Stack Developer
              with over 1.5+ years of experience in software development and
              building responsive, elegant and user-friendly web technologies.
              Aiming to leverage academic experience and a proven knowledge of
              Full-Stack development to successfully work in an Agile,
              collaborative environment. Frequently praised in debugging,
              troubleshooting and solving complex technical issues. Seeking to
              build, design and code.
            </Title>
            <Button type='primary' className='bannerButton'>
              My Work
            </Button>
            <Button type='primary' className='bannerButton'>
              Hire Me
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Banner;
