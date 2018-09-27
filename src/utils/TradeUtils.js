import data from "./../sampleData.json";

class Stock {

  static getSymbolData

  static getDividendYield(price, symbol) {
    return this.getDividendValue(symbol) / price;
  }

  static getPeRatio(price, symbol) {
    const dividend = this.getDividendValue(symbol);
    return price / dividend;
  }

  static getDividendValue(symbol) {
    return symbol.type === "common"
      ? symbol.lastDividend
      : symbol.fixedDividend * symbol.parValue;
  }

  static getVolumeWeightedStockPrice() {
    return null;
  }
}

/* 



*/

class Trades {
  static getBySymbol(symbol, tradeList) {
    return tradeList.filter(trade => trade.symbol === symbol);
  }

  static getLastTrades(tradeList) {}
}

function getSymbolData(symbol) {}
