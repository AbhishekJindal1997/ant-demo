import React, { Component } from "react";
import { Tabs } from "antd";
import Banner from "./bannerImage";
import Skills from "./skills";

const { TabPane } = Tabs;

const Navigation = () => {
  return (
    <>
      <Tabs defaultActiveKey='1' centered>
        <TabPane tab='Home' key='1'>
          <Banner />
          <Skills />
        </TabPane>
        <TabPane tab='Services' key='2'>
          Content of Tab Pane 2
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
