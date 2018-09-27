import React from "react";

export default function getColumns(sortedInfo) {
  return [
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: text => <a href="javascript:;">{text.toUpperCase()}</a>
    },
    {
      title: "Operation",
      dataIndex: "operation",
      key: "operation",
      align: "center",
      render: op => (
        <span style={{ color: op === "buy" ? "green" : "red" }}>{op} </span>
      )
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
      align: "center"
    }
  ];
}
