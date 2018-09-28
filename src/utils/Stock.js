import data from "./../sampleData.json";
import Trades from "./Trades";

class Stock {
  static get(symbol) {
    return data.filter(stock => stock.symbol === symbol)[0];
  }

  static getSymbols() {
    return data.map(stock => stock.symbol);
  }

  static getDividendYield(price, symbol) {
    return this.getDividendValue(symbol) / price;
  }

  static getPeRatio(price, symbol) {
    return price / this.getDividendValue(symbol);
  }

  static getDividendValue(symbol) {
    let stock = this.get(symbol);
    return (
      stock && (stock.type === "common" ? stock.lastDividend : stock.fixedDividend * stock.parValue)
    );
  }

  static getVolumeWeightedStockPrice() {
    return null;
  }
}

export default Stock;
