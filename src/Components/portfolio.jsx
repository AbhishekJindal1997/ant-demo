import React, { Component } from "react";
import { Typography } from "antd";
import { Row, Col } from "antd";
import { Carousel } from "antd";
import BannerImage from "../Images/bannerImage3.jpeg";
import webDevelopment from "../Images/webDevelopment.jpg";
import webDesign from "../Images/web-design.png";
import androiDevelopment from "../Images/app-development.svg";
import { Card } from "antd";
import ajdev from "../Images/ajdev.JPG";

const { Meta } = Card;

const { Title } = Typography;
const contentStyle = {
  height: "350px",
  color: "#fff",
  width: "80%",
  margin: "0 auto",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Portfolio = () => {
  return (
    // <Row>
    //   <Col span={16}>
    //     <div className='portfolio'>
    //       <Title level={2} align='center'>
    //         My Projects
    //       </Title>

    //       <Carousel autoplay>
    //         <div>
    //           <a href='http://google.com'>
    //             <img
    //               src={BannerImage}
    //               width='135%'
    //               height='800px'
    //               style={contentStyle}
    //             ></img>
    //           </a>
    //         </div>
    //         <div>
    //           <h3 style={contentStyle}>2</h3>
    //         </div>
    //         <div>
    //           <h3 style={contentStyle}>3</h3>
    //         </div>
    //         <div>
    //           <h3 style={contentStyle}>4</h3>
    //         </div>
    //       </Carousel>
    //     </div>
    //   </Col>

    //   <Col span={8}>
    //     <Title level={2} align='center'>
    //       Services
    //     </Title>

    //     <div className='servicesContainer'>
    //       <img src={webDevelopment} alt='web-Development' width='100px'></img>
    //       <Title level={5} align='center'>
    //         Web Development
    //       </Title>

    //       <img src={webDesign} alt='web-design' width='100px'></img>
    //       <Title level={5} align='center'>
    //         Web Design
    //       </Title>

    //       <img
    //         src={androiDevelopment}
    //         alt='Android-Development'
    //         width='100px'
    //       ></img>
    //       <Title level={5} align='center'>
    //         Android Development
    //       </Title>
    //     </div>
    //   </Col>
    // </Row>

    <div className='portfolio'>
      <Title level={2} align='center'>
        My Projects
      </Title>

      <Row className='portfolioRow'>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt='example' src={ajdev} />}
          >
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt='example' height='200' src={ajdev} />}
          >
            <Meta
              title='Europe Street beat'
              description='www.instagram.com'
              align='center'
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt='example' src={ajdev} />}
          >
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        </Col>

        {/* <Col>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt='example' src={ajdev} />}
          >
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default Portfolio;
