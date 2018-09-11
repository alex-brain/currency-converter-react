import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class CurrencyRateItem extends Component {

  static propTypes = {
    symbol: PropTypes.string,
    name: PropTypes.string,
    rate: PropTypes.number,
    id: PropTypes.string,
    onClick: PropTypes.func
  };

  render() {
    const { symbol, name, rate, onClick, id } = this.props;
    return (
      <div className="CurrencyRateItem">
        <div className="CurrencyRateItem__cell CurrencyRateItem__symbol">
          {symbol}
        </div>
        <div className="CurrencyRateItem__cell CurrencyRateItem__name">
          {name}
        </div>
        <div className="CurrencyRateItem__cell CurrencyRateItem__rate">
          {rate}
        </div>
        <div className="CurrencyRateItem__favourite-btn" onClick={onClick(id)}>
          Добавить в избранное
        </div>
      </div>
    );
  }
}

export default CurrencyRateItem;
