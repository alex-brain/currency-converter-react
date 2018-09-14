import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from '../../../components/lists';
import { CurrencyRateListRow, CurrencyRateItem } from '../../../components/elements';
import './styles.scss';

class CurrencyRateList extends Component {

  static propTypes = {
    currency: PropTypes.object.isRequired,
    getItemId: PropTypes.func,
    onToggleFavouriteClick: PropTypes.func
  };

  renderItem = (item) => {
    const { favourite } = this.props.currency;
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
    const { favourite } = this.props.currency;
    return this.props.currency.list.filter(item => !favourite[item.name]);
  };

  getFavouriteRates = () => {
    const { favourite } = this.props.currency;
    return this.props.currency.list.filter(item => favourite[item.name]);
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
              />
            </div>
            <div className="CurrencyRateList__list">
              <List
                items={favouriteRates}
                renderItem={this.renderItem}
              />
            </div>
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
              />
            </div>
            <div className="CurrencyRateList__list">
              <List
                items={generalRates}
                renderItem={this.renderItem}
              />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default CurrencyRateList;
