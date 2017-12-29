import React, { Component } from 'react'
import {
  ifElse,
  length,
  gt,
  pipe,
  map,
} from 'ramda'
import cryptoCurrency from '../../services/cryptocurrency'
import CryptoCurrencyItem from '../CryptoCurrencyItem'
import './CryptoCurrencyList.scss'

class CryptoCurrencyList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currencies: [],
      hasError: false,
    }

    cryptoCurrency.list()
      .then(currencies => this.setState({ currencies }))
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    return (
      <ul className="cryptocurrency-list">
        {map(
          currency => <CryptoCurrencyItem
            key={currency.id}
            id={currency.id}
            name={currency.name}
            symbol={currency.symbol}
            percent_change_24h={currency.percent_change_24h}
            percent_change_7d={currency.percent_change_7d} />,
          this.state.currencies
        )}  
      </ul>
    )
  }
}

export default CryptoCurrencyList
