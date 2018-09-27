import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Table, Tag, Icon } from "antd";
import "./TradeList.css";
import data from "./mock.js";
import getColumns from "./tableColumns";

export default class TradeList extends Component {
  state = {
    sortedInfo: null
  };

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortedInfo: sorter
    });
  };

  render() {
    let { sortedInfo } = this.state;
    sortedInfo = sortedInfo || {};

    const tableColumns = getColumns(sortedInfo);

    return (
      <Card
        className="trade-list__container"
        bodyStyle={{ padding: "12px 32px 22px 32px" }}
        extra={
          <div>
            Volume Weighted Stock Price* : &nbsp;{" "}
            <Tag color="purple"> 35.15 </Tag>
          </div>
        }
        title={
          <span style={{ fontSize: "1.2em" }}>
            <Icon type="swap" theme="outlined" /> &nbsp; Transactions
            &nbsp;&nbsp;
            <Icon type="right" theme="outlined" style={{ fontSize: "14px" }} />
            &nbsp;&nbsp; TEA
          </span>
        }
      >
        <Table
          columns={tableColumns}
          dataSource={data}
          pagination={{
            defaultPageSize: 4,
            hideOnSinglePage: true,
            simple: true
          }}
          loading={false}
          onChange={this.handleChange}
          size="middle"
          rowKey="timestamp"
        />
        <span className="trade-list__vwsp--clarification">
          *Volume Weighted Stock Price is based on trades made on past 5 minutes
        </span>
      </Card>
    );
  }
}

TradeList.propTypes = {
  selectedSymbol: PropTypes.string,
  tradeList: PropTypes.oneOf([
    PropTypes.arrayOf(
      PropTypes.shape({
        symbol: PropTypes.string.isRequired,
        operation: PropTypes.oneOf(["buy", "sell"]).isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired
      })
    ),
    []
  ])
};
