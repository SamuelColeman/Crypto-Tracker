import React, { Component } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import '../CoinCards/CoinCards.css';
import { fetchCoinCards } from '../../apiCalls';

class CoinCards extends Component {
    constructor() {
        super();
        this.state = {
            coinCards: [],
            mappedCoinCards: []
        }
    }

    mapCoinCards = async () => {
        await this.state.coinCards.forEach(coinCard => {
            this.state.mappedCoinCards.push(<CoinCard coinCardData={coinCard}/>);
        })
    }

  getCoinCards = async () => {
    try {
        const coinCards = await fetchCoinCards()
        await this.setState({ coinCards })
        await this.mapCoinCards()
    } catch(error) {
          console.log(error)
    }
  }

    render() {
        return (
            <div className="CoinCards">
                {this.state.mappedCoinCards}
            </div>
          );
    }
}

export default CoinCards;