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

    componentDidMount() {
        this.getCoinCards()
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
            <div className="CoinCards">
                <section className="coin-cards-labels">
                    <h3>Coin</h3>
                    <h3>Price</h3>
                    <h3>24h Change</h3>
                    <h3>Market Cap</h3>
                    <h3>24h Volume</h3>
                    <h3>Supply</h3>
                </section>
                {mapCoinCards}
            </div>
          );
    }
}

export default CoinCards;