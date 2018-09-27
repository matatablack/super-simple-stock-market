import React, { Component } from "react";
import App from "./App";

const ActionsContext = React.createContext();

export default class extends Component {
  state = {
    selectedSymbol: null,
    tradeList: []
  };

  selectStockSymbol = symbol =>
    this.setState({
      selectedSymbol: symbol
    });

  addTrade = trade =>
    this.setState(({ tradeList }) => ({
      tradeList: [...tradeList, trade]
    }));

  render() {
    const { selectedSymbol, tradeList } = this.state;

    const actions = {
      selectStockSymbol: this.selectStockSymbol,
      addTrade: this.addTrade
    };

    return (
      <ActionsContext.Provider value={actions}>
        <App selectedSymbol={selectedSymbol} tradeList={tradeList} />
      </ActionsContext.Provider>
    );
  }
}
