import React, { Component } from "react";
import { Typography } from "antd";
import { Row, Col } from "antd";
import { Card } from "antd";

const { Meta } = Card;
const { Title } = Typography;

const Services = () => {
  return (
    <div className='service'>
      <Row>
        <Col span={12} align='center'>
          <Title level={2}>Services Section</Title>
          <Title level={5} align='center'>
            loreu imsuhsygeyfu gyeftuef yuwdtufdwt ftfdtwfkw qtkf twfdtcwt ttwq
            ysayftef ftvsfkuastdfkatf my name us abushieh kjindal hgdyfyglsgdy
            yd6y loreu imsuhsygeyfu gyeftuef yuwdtufdwt ftfdtwfkw qtkf twfdtcwt
            ttwq ysayftef ftvsfkuastdfka
          </Title>

          <Row>
            <Col span={12} align='center'>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt='example'
                    src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                  />
                }
              >
                <Meta
                  title='Europe Street beat'
                  description='www.instagram.com'
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt='example'
                    src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                  />
                }
              >
                <Meta
                  title='Europe Street beat'
                  description='www.instagram.com'
                />
              </Card>
            </Col>
          </Row>
          {/* second line */}
          <Row>
            <Col span={12} align='center'>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt='example'
                    src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                  />
                }
              >
                <Meta
                  title='Europe Street beat'
                  description='www.instagram.com'
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt='example'
                    src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                  />
                }
              >
                <Meta
                  title='Europe Street beat'
                  description='www.instagram.com'
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={12} align='center'>
          <Title level={2}>Portfolio Section</Title>
          <Title level={5} align='center'>
            loreu imsuhsygeyfu gyeftuef yuwdtufdwt ftfdtwfkw qtkf twfdtcwt ttwq
            ysayftef ftvsfkuastdfkatf my name us abushieh kjindal hgdyfyglsgdy
            yd6y loreu imsuhsygeyfu gyeftuef yuwdtufdwt ftfdtwfkw qtkf twfdtcwt
            ttwq ysayftef ftvsfkuastdfka
          </Title>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
