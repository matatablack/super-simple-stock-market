import React, { Component } from "react";
import { Card, Table, Tag, Icon } from "antd";
import "./TradeList.css";
import data from "./mock.js";

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

    const columns = [
      {
        title: "Symbol",
        dataIndex: "symbol",
        key: "symbol",
        sorter: true,
        render: text => <a href="javascript:;">{text.toUpperCase()}</a>
      },
      {
        title: "Operation",
        dataIndex: "operation",
        key: "operation",
        sorter: true,
        align: "center",
        render: op => <span style={{ color: op === "buy" ? "green" : "red" }}>{op} </span> //<Tag color={op === "buy" ? "green" : "red"}>{op}</Tag>
      },
      {
        title: "Amount",
        dataIndex: "quantity",
        key: "quantity",
        sorter: true,
        align: "center",
        sorter: (a, b) => a.quantity - b.quantity,
        sortOrder: sortedInfo.columnKey === "quantity" && sortedInfo.order
      },
      {
        title: "Price",
        key: "price",
        dataIndex: "price",
        sorter: true,
        align: "center",
        sorter: (a, b) => a.price - b.price,
        sortOrder: sortedInfo.columnKey === "price" && sortedInfo.order
      },
      {
        title: "Time",
        key: "timestamp",
        dataIndex: "timestamp",
        sorter: true,
        align: "center",
        sorter: (a, b) => a.timestamp - b.timestamp,
        sortOrder: sortedInfo.columnKey === "timestamp" && sortedInfo.order
      }
    ];

    return (
      <Card
        className="trade-list__container"
        bodyStyle={{ padding: "12px 32px 22px 32px" }}
        extra={
          <div>
            Volume Weighted Stock Price* : &nbsp; <Tag color="purple"> 35.15 </Tag>
          </div>
        }
        title={
          <span style={{ fontSize: "1.2em" }}>
            <Icon type="swap" theme="outlined" /> &nbsp; Transactions
          </span>
        }
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            defaultPageSize: 4,
            hideOnSinglePage: true,
            simple: true
          }}
          loading={false}
          onChange={this.handleChange}
          size="middle"
        />
        <span className="trade-list__vwsp--clarification">
          *Volume Weighted Stock Price is based on trades made on past 5 minutes
        </span>
      </Card>
    );
  }
}
