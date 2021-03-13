import React, { useState, Component } from "react";
import { Row, Col, Form, Input, Button, Radio } from "antd";

const Contact = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 64,
          },
        }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <div className="contact">
      <Row>
        <Col span={12}>
          <div className="contactForm">
            <Form
              {...formItemLayout}
              layout={formLayout}
              form={form}
              initialValues={{
                layout: formLayout,
              }}
              onValuesChange={onFormLayoutChange}
            >
              <Form.Item>
                <Input placeholder="Your Name" />
              </Form.Item>

              <Form.Item>
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item>
                <Input placeholder="Message" />
              </Form.Item>

              <Form.Item {...buttonItemLayout}>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col span={12}>
          <div className="contactImage"></div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
