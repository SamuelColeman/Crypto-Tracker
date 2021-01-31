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
        <h1 className="coin-card-title">{this.state.coinCardData.name}</h1>
        <h2 className="coin-card-price">${this.state.coinCardData.price_usd}</h2>
      </div>
    );
  };
}

export default CoinCard;