import React, { Component } from "react";
import { Card, Icon, Tag, Select, Divider } from "antd";
import "./MarketInfo.css";

const Option = Select.Option;

export default class MarketInfo extends Component {
  state = {
    selectedStock: null
  };

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  handleBlur() {
    console.log("blur");
  }

  handleFocus() {
    console.log("focus");
  }

  render() {
    return (
      <Card
        className="market-info__container"
        bodyStyle={{ padding: "12px 32px 22px 32px", minHeight: "" }}
        extra={
          <div>
            All Share Index : &nbsp; <Tag color="blue"> 35.15 </Tag>
          </div>
        }
        title={
          <span style={{ fontSize: "1.2em" }}>
            <Icon type="stock" theme="outlined" /> &nbsp; Market information
          </span>
        }
      >
        <p>
          The Global Beverage Corporation Exchange is the leading stock market trading in drinks
          companies. To start operating please select a stock...
        </p>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Symbol..."
          optionFilterProp="children"
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
        &nbsp;&nbsp;
        <Icon type="right" theme="outlined" />
        &nbsp;&nbsp; Type: common <Divider type="vertical" /> Par Value: 200{" "}
        <Divider type="vertical" /> Last Dividend: 8
      </Card>
    );
  }
}
