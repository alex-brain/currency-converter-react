import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CurrencyRateListRow, Button} from '../index'
import './styles.scss';

class CurrencyRateItem extends Component {

  static propTypes = {
    name: PropTypes.string,
    rate: PropTypes.number,
    isFavourite: PropTypes.bool,
    onToggleFavouriteClick: PropTypes.func
  };

  getButton = () => {
    const { name, isFavourite, onToggleFavouriteClick } = this.props;
    return (
      <Button onClick={onToggleFavouriteClick(name)} theme={isFavourite ? 'red' : 'green'}>
        {isFavourite ? 'Удалить из избранного' : 'Добавить в избранное'}
      </Button>
    );
  };

  render() {
    const { name, rate, isFavourite, onToggleFavouriteClick } = this.props;
    const button = this.getButton();
    return (
      <div className="CurrencyRateItem">
        <CurrencyRateListRow
          cells={[
            name,
            rate,
            button
          ]}
        />
      </div>
    );
  }
}

export default CurrencyRateItem;
