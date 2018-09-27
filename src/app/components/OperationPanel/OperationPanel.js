import React, { Component } from "react";
import { Card, Row, Col, Button, Tabs, Input, Divider } from "antd";
import "./OperationPanel.css";

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

  render() {
    return (
      <Card
        style={{ width: "100%" }}
        bodyStyle={{ padding: "0px 10px 10px 10px" }}
        className="operation-panel"
      >
        <Tabs
          defaultActiveKey={tabs[0].key}
          onChange={this.handleTabChange}
          size="large"
          tabBarGutter={8}
          tabBarStyle={{ display: "flex", justifyContent: "space-around" }}
        >
          {tabs.map(tab => (
            <TabPane tab={tab.name} key={tab.key} />
          ))}
        </Tabs>
        <Row type="flex" justify="center">
          <Col span={22} className="operation-panel__input--margin">
            Price
          </Col>
          <Col span={22}>
            <Input addonBefore={"$"} size="large" />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={22} className="operation-panel__input--margin">
            Quantity
          </Col>
          <Col span={22}>
            <Input addonBefore={"#"} size="large" />
          </Col>
        </Row>
        <Divider />
        <Row type="flex" justify="center">
          <Col span={20}>
            <Row>
              <Col span={17}>
                <span className="operation-panel__info-title">
                  Dividend Yield:{" "}
                </span>
              </Col>
              <Col span={7}>
                <span className="operation-panel__info-value"> 358.25 </span>
              </Col>
            </Row>
          </Col>
          <Divider />
          <Col span={20}>
            <Col span={17}>
              <span className="operation-panel__info-title">P/E Ratio: </span>
            </Col>
            <Col span={7}>
              <span className="operation-panel__info-value"> 3.25 </span>
            </Col>
          </Col>
        </Row>
        <Divider />
        <Row type="flex" justify="center">
          <Col span={14}>Total:</Col>
          <Col span={7}>
            <b>$548.185,35</b>
          </Col>
        </Row>
        <Button
          type="primary"
          block
          size="large"
          className="operation-panel__action-button"
        >
          {`${this.state.activeTab} now `}
        </Button>
      </Card>
    );
  }
}
