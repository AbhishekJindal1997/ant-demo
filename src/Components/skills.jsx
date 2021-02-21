import React, { Component } from "react";
import { Row, Col } from "antd";
import { Typography } from "antd";
import { Progress } from "antd";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Skills = () => {
  return (
    <div className='skills_exp'>
      <Row>
        <Col span={12} className='skillsCircles'>
          <Title level={2} align='center'>
            Professional Work Skills
          </Title>
          <div align='center'>
            <Progress
              type='circle'
              percent={75}
              width={70}
              strokeColor='#eb2f96'
              format={() => "HTML"}
            />
            <Progress
              type='circle'
              percent={100}
              width={70}
              strokeColor='#fadb14'
              format={() => "CSS"}
            />
            <Progress
              type='circle'
              percent={75}
              width={70}
              format={() => "JS"}
            />
            <Progress
              align='center'
              type='circle'
              percent={100}
              width={70}
              strokeColor='#254000'
              format={() => "REACT"}
            />
          </div>

          <Title level={5} align='center'>
            loreu imsuhsygeyfu gyeftuef yuwdtufdwt ftfdtwfkw qtkf twfdtcwt ttwq
            ysayftef ftvsfkuastdfkatf my name us abushieh kjindal hgdyfyglsgdy
            yd6y loreu imsuhsygeyfu gyeftuef yuwdtufdwt ftfdtwfkw qtkf twfdtcwt
            ttwq ysayftef ftvsfkuastdfka
          </Title>

          <div className='skillsbar'>
            <Title level={3}>Work Skills</Title>
            <div style={{ width: 300 }}>
              <Progress percent={75} size='small' strokeColor='#eb2f96' />
              <Progress percent={90} size='small' strokeColor='#fadb14' />
              <Progress percent={75} size='small' />
              <Progress percent={90} size='small' strokeColor='#254000' />
            </div>
          </div>
        </Col>

        <Col span={12} className='experience'>
          <Title level={2} align='center' className='expTitle'>
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
          </Timeline>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
