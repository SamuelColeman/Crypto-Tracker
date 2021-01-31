import React, { Component } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import '../CoinCards/CoinCards.css';
import { fetchCoinCards } from '../../apiCalls';

class CoinCards extends Component {
    constructor() {
        super();
        this.state = {
            coinCards: [],
            coinCardData: { name: 'Bitcoin'}
        }
    }

  getCoinCards = async () => {
    try {
        const coinCards = await fetchCoinCards()
        this.setState({ coinCards })
    } catch(error) {
          console.log(error)
    }
  }

    render() {
        const mapCoinCards = this.state.coinCards.map(coinCard => {
            return (<CoinCard coinCardData={coinCard}/>);
        })
        return (
            <div className="CoinCards" onHover={this.getCoinCards()}>
                {mapCoinCards}
            </div>
          );
    }
}

export default CoinCards;