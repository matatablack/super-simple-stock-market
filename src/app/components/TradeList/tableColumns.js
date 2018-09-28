import React from "react";

export default function getColumns(sortedInfo, filteredInfo) {
  return [
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      sorter: true,
      sorter: (a, b) => a.symbol.localeCompare(b.symbol),
      sortOrder: sortedInfo.columnKey === "symbol" && sortedInfo.order,
      render: text => <span style={{ color: "#1890ff" }}>{text.toUpperCase()}</span>
    },
    {
      title: "Operation",
      dataIndex: "operation",
      key: "operation",
      align: "center",
      sorter: (a, b) => a.operation.localeCompare(b.operation),
      sortOrder: sortedInfo.columnKey === "operation" && sortedInfo.order,
      render: op => <span style={{ color: op === "buy" ? "#5bbf5b" : "#f06767" }}>{op} </span>
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
      align: "center",
      sorter: (a, b) => a.timestamp - b.timestamp,
      sortOrder: sortedInfo.columnKey === "timestamp" && sortedInfo.order,
      render: epoch => <span>{new Date(epoch).toLocaleString()}</span>
    }
  ];
}
