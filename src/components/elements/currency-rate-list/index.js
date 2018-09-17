import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from '../../../components/lists';
import { CurrencyRateListRow, CurrencyRateItem } from '../../../components/elements';
import './styles.scss';

class CurrencyRateList extends Component {

  static propTypes = {
    currency: PropTypes.array.isRequired,
    favourite: PropTypes.object.isRequired,
    getItemId: PropTypes.func,
    onToggleFavouriteClick: PropTypes.func,
    wait: PropTypes.bool
  };

  renderItem = (item) => {
    const { favourite } = this.props;
    return (
      <CurrencyRateItem
        name={item.name}
        rate={item.rate}
        isFavourite={favourite[item.name]}
        onToggleFavouriteClick={this.props.onToggleFavouriteClick}
      />
    );
  };

  getGeneralRates = () => {
    const { favourite, currency } = this.props;
    return currency.filter(item => !favourite[item.name]);
  };

  getFavouriteRates = () => {
    const { favourite, currency } = this.props;
    return currency.filter(item => favourite[item.name]);
  };

  render() {
    const generalRates = this.getGeneralRates();
    const favouriteRates = this.getFavouriteRates();
    return (
      <div className="CurrencyRateList">
        {!!favouriteRates.length && (
          <Fragment>
            <h2>Избранное</h2>
            <div className="CurrencyRateList__header">
              <CurrencyRateListRow
                cells={[
                  'Валюта',
                  'Курс',
                  'Действие'
                ]}
                theme={'header'}
              />
            </div>
            <List
              items={favouriteRates}
              renderItem={this.renderItem}
            />
          </Fragment>
        )}
        {!!generalRates.length && (
          <Fragment>
            <h2>Основное</h2>
            <div className="CurrencyRateList__header">
              <CurrencyRateListRow
                cells={[
                  'Валюта',
                  'Курс',
                  'Действие'
                ]}
                theme={'header'}
              />
            </div>
            <List
              items={generalRates}
              renderItem={this.renderItem}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default CurrencyRateList;
