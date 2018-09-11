import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CurrencyRateListRow, Button} from '../index'
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
        <CurrencyRateListRow
          cells={[
            symbol,
            name,
            rate,
            <Button onClick={onClick(id)}>
              Добавить в избранное
            </Button>
          ]}
        />
      </div>
    );
  }
}

export default CurrencyRateItem;
