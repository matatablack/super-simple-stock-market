import React, { Component } from "react";
import App from "./App";

const ActionsContext = React.createContext();
const ActionsProvider = ActionsContext.Provider;
const ActionsConsumer = ActionsContext.Consumer;
class Container extends Component {
  state = {
    selectedSymbol: undefined,
    tradeList: []
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
