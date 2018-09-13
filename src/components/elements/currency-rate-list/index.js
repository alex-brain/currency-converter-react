import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from '../../../components/lists';
import { CurrencyRateListRow, CurrencyRateItem } from '../../../components/elements';
import './styles.scss';

class CurrencyRateList extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    getItemId: PropTypes.func,
    onToggleFavouriteClick: PropTypes.func
  };

  renderItem = (item) => {
    return (
      <CurrencyRateItem
        name={item.name}
        rate={item.rate}
        isFavourite={item.isFavourite}
        onToggleFavouriteClick={this.props.onToggleFavouriteClick}
      />
    );
  };

  getGeneralRates = () => {
    return this.props.items.filter(item => !item.isFavourite);
  };

  getFavouriteRates = () => {
    return this.props.items.filter(item => item.isFavourite);
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
                items={this.getFavouriteRates()}
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
                items={this.getGeneralRates()}
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
