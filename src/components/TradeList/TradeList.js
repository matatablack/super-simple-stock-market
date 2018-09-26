import React, { Component } from "react";
import { Table, Tag } from "antd";

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
        render: op => (
          <span style={{ color: op === "buy" ? "green" : "red" }}>{op} </span>
        ) //<Tag color={op === "buy" ? "green" : "red"}>{op}</Tag>
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
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        loading={false}
        onChange={this.handleChange}
        size="middle"
      />
    );
  }
}
