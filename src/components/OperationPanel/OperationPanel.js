import React, { Component, Fragment } from "react";
import { Card, Row, Col, Button, InputNumber } from "antd";
import { Tabs } from "antd";
import { Input } from "antd";
const { Meta } = Card;

const TabPane = Tabs.TabPane;

const tabs = [
  {
    name: "BUY",
    key: "buy"
  },
  {
    name: "SELL",
    key: "sell"
  }
];

export default class OperationPanel extends Component {
  state = {
    activeTab: tabs[0].key
  };

  handleTabChange = key => {
    this.setState({ activeTab: key });
  };

  getContent = () => {
    return (
      <Fragment>
        <Row type="flex" justify="center">
          <Col span={22} style={{ marginBottom: ".35em" }}>
            Price
          </Col>
          <Col span={22}>
            <Input addonBefore={"$"} size="large" />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={22} style={{ marginBottom: ".35em" }}>
            Quantity
          </Col>
          <Col span={22}>
            <Input addonBefore={"#"} size="large" />
          </Col>
        </Row>
      </Fragment>
    );
  };

  render() {
    return (
      <Card
        style={{ width: "100%" }}
        bodyStyle={{ padding: "0px 10px 10px 10px" }}
      >
        <Tabs
          defaultActiveKey={tabs[0].key}
          onChange={this.handleTabChange}
          size="large"
          tabBarGutter={8}
          tabBarStyle={{ display: "flex", justifyContent: "space-around" }}
        >
          {tabs.map(tab => (
            <TabPane tab={tab.name} key={tab.key}>
              {this.getContent()}
            </TabPane>
          ))}
        </Tabs>
        <Row type="flex" justify="center">
          <Col span={22}>
            <Meta
              title="Dividend Yield"
              description="This is the description"
            />
            <Meta title="P/E Ratio" description="This is the description" />
          </Col>
        </Row>
        <Button
          type="primary"
          block
          style={{ textTransform: "capitalize", margin: "1em 0 .5em 0" }}
          size="large"
        >
          {`${this.state.activeTab} now `}
        </Button>
      </Card>
    );
  }
}
