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
              loreum imuusvyi bugfyefgli7g ikshyfy g7 gbfyeg o8;y7syf hjygyefre;
              hg6ygugew6f rwud hetyw7y ryukgefuaetfv7iehifweguy geurh38yrv
              ieytiegfyr fyegyfgy
            </Title>
            <Button type='primary' className='bannerButton'>
              My Work
            </Button>
            <Button type='primary' className='bannerButton'>
              Hire Me
            </Button>
          </div>
          {/* <Title level={2} align='center' F7F7F7>
            My Experience
          </Title>
          <Timeline mode='alternate'>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color='green'>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Timeline.Item>
            <Timeline.Item color='red'>
              Network problems being solved 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
            >
              Technical testing 2015-09-01
            </Timeline.Item>
          </Timeline> */}
        </Col>
      </Row>
    </>
  );
};

export default Banner;
