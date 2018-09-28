import React, { Component } from "react";
import App from "./App";

const ActionsContext = React.createContext();
const ActionsProvider = ActionsContext.Provider;
const ActionsConsumer = ActionsContext.Consumer;
class Container extends Component {
  state = {
    selectedSymbol: undefined,
    tradeList: [
      {
        symbol: "pop",
        operation: "buy",
        price: "3",
        quantity: "234",
        timestamp: 1538115031457
      },
      {
        symbol: "gin",
        operation: "sell",
        price: "3",
        quantity: "234",
        timestamp: 1538115034089
      },
      {
        symbol: "joe",
        operation: "sell",
        price: "4453",
        quantity: "23",
        timestamp: 1538115038783
      },
      {
        symbol: "pop",
        operation: "buy",
        price: "4453",
        quantity: "23",
        timestamp: 1538115047405
      }
    ]
  };

  selectStockSymbol = symbol => {
    this.setState({
      selectedSymbol: symbol
    });
  };
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
      <ActionsProvider value={actions}>
        <App selectedSymbol={selectedSymbol} tradeList={tradeList} />
      </ActionsProvider>
    );
  }
}

function withActions(Component) {
  return props => (
    <ActionsConsumer>{actions => <Component {...props} actions={actions} />}</ActionsConsumer>
  );
}

export { ActionsConsumer, withActions, Container as default };
