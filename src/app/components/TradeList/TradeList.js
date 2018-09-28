import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Table, Tag, Icon } from "antd";
import "./TradeList.css";
import getColumns from "./tableColumns";
import TradeListTitle from "./TradeListTitle";
import Stock from "../../../utils/Stock";

export default class TradeList extends Component {
  state = {
    sortedInfo: {
      columnKey: "timestamp",
      order: "descend"
    }
  };

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortedInfo: sorter
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const tableColumns = getColumns(sortedInfo, filteredInfo);
    const { tradeList, selectedSymbol } = this.props;

    return (
      <Card
        className="trade-list__container"
        bodyStyle={{ padding: "12px 32px 22px 32px" }}
        extra={
          selectedSymbol && (
            <div>
              Volume Weighted Stock Price* : &nbsp;{" "}
              <Tag color="purple">
                {Stock.getVolumeWeightedStockPrice(tradeList, selectedSymbol).toFixed(2)}
              </Tag>
            </div>
          )
        }
        title={<TradeListTitle selectedSymbol={selectedSymbol} />}
      >
        <Table
          columns={tableColumns}
          dataSource={
            selectedSymbol ? tradeList.filter(trade => trade.symbol === selectedSymbol) : tradeList
          }
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

/* TradeList.propTypes = {
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
}; */
