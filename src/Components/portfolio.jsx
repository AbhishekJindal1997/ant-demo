import React, { Component } from "react";
import { Typography } from "antd";
import { Row, Col } from "antd";
import { Card } from "antd";
import { Button } from "antd";
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
    <div className="portfolio">
      <Title level={2} align="center">
        My Projects
      </Title>

      <Row className="portfolioRow">
        <Col span={8} className="project">
          <img
            src={ajdev}
            height="auto"
            width="500px"
            alt="ajdev cover image"
          />
          <Button className="visitButton" type="primary">
            Visit
          </Button>
        </Col>

        <Col span={8} className="project">
          <img
            src={ajdev}
            height="auto"
            width="500px"
            alt="ajdev cover image"
          />
          <Button className="visitButton" type="primary">
            Visit
          </Button>
        </Col>

        <Col span={8} className="project">
          <img
            src={ajdev}
            height="auto"
            width="500px"
            alt="ajdev cover image"
          />
          <Button className="visitButton" type="primary">
            Visit
          </Button>
        </Col>
      </Row>

      <Row className="portfolioRow">
        <Col span={8} className="project">
          <img
            src={ajdev}
            height="auto"
            width="500px"
            alt="ajdev cover image"
          />
          <Button className="visitButton" type="primary">
            Visit
          </Button>
        </Col>

        <Col span={8} className="project">
          <img
            src={ajdev}
            height="auto"
            width="500px"
            alt="ajdev cover image"
          />
          <Button className="visitButton" type="primary">
            Visit
          </Button>
        </Col>

        <Col span={8} className="project">
          <img
            src={ajdev}
            height="auto"
            width="500px"
            alt="ajdev cover image"
          />
          <Button className="visitButton" type="primary">
            Visit
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;
