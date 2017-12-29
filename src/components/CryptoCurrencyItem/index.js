import React from 'react'
import './CryptoCurrencyItem.scss'

const CryptoCurrencyItem = props => (
  <li className="cryptocurrency-item" id={props.id}>
    <div className="cryptocurrency-descrption">
      <span className="cryptocurrency-symbol">{props.symbol}</span> | 
      <span className="cryptocurrency-name">{props.name}</span>
    </div>
    <div className="cryptocurrency-cotation">
      <span className="cryptocurrency-change-24h">24h: {props.percent_change_24h}</span>
      <span className="cryptocurrency-change-7d">7d: {props.percent_change_7d}</span>
    </div>
  </li>
)

export default CryptoCurrencyItem
