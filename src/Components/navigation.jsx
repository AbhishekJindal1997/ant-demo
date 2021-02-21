import React, { Component } from "react";
import { Tabs } from "antd";
import Banner from "./bannerImage";
import Skills from "./skills";
import Services from "./services";

const { TabPane } = Tabs;

const Navigation = () => {
  return (
    <>
      <Tabs defaultActiveKey='1' centered>
        <TabPane tab='Home' key='1'>
          <Banner />
          <Skills />
          <Services />
        </TabPane>
        <TabPane tab='Services' key='2'>
          <Services />
        </TabPane>
        <TabPane tab='Portfolio' key='3'>
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab='About' key='4'>
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab='Contact' key='5'>
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
};

export default Navigation;
