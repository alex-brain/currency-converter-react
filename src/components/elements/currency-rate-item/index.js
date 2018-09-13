import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CurrencyRateListRow, Button} from '../index'
import './styles.scss';

class CurrencyRateItem extends Component {

  static propTypes = {
    name: PropTypes.string,
    rate: PropTypes.number,
    onClick: PropTypes.func
  };

  render() {
    const { name, rate, onClick } = this.props;
    return (
      <div className="CurrencyRateItem">
        <CurrencyRateListRow
          cells={[
            name,
            rate,
            <Button onClick={onClick(rate)}>
              Добавить в избранное
            </Button>
          ]}
        />
      </div>
    );
  }
}

export default CurrencyRateItem;
