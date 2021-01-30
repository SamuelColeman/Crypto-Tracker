import React, { Component } from 'react';
import './CoinCard.css';

class CoinCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinCardData: this.props.coinCardData || {}
        }
    }

  render() {
    return (
      <section className="CoinCard">
        <h1 className="coin-card-title">{this.state.coinCardData.name}</h1>
      </section>
    );
  };
}

export default CoinCard;