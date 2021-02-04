import React, { Component } from 'react';
import '../CoinCard/CoinCard.css';

class CoinCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinCardData: this.props.coinCardData || {}
        }
    }

  render() {
    return (
      <div id={this.state.coinCardData.id} className="CoinCard">
        <p className="coin-card-rank">{this.state.coinCardData.rank}</p>
        <div className="coin-card-name">
          <h3 className="coin-card-symbol">{this.state.coinCardData.symbol}</h3>
          <p className="coin-card-title">{this.state.coinCardData.name}</p>
        </div>
        <p className="coin-card-price">${this.state.coinCardData.price_usd}</p>
        <p className="coin-card-percent-change-24h">{this.state.coinCardData.percent_change_24h}%</p>
        <p className="coin-card-market-cap-usd">${this.state.coinCardData.market_cap_usd}</p>
        <p className="coin-card-volume-24">${this.state.coinCardData.volume24}</p>
        <p className="coin-card-c-supply">${this.state.coinCardData.csupply}</p>
      </div>
    );
  };
}

export default CoinCard;