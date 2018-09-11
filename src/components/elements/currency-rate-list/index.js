import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from '../../../components/lists';
import { CurrencyRateListRow, CurrencyRateItem } from '../../../components/elements';
import './styles.scss';

class CurrencyRateList extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    getItemId: PropTypes.func,
    onClick: PropTypes.func
  };

  renderItem = (item) => {
    return (
      <CurrencyRateItem
        symbol={item.currencySymbol}
        name={item.currencyName}
        id={item.id}
        rate={0}
        onClick={this.props.onClick}
      />
    );
  };

  render() {
    const { items, getItemId } = this.props;
    return (
      <div className="CurrencyRateList">
        <div className="CurrencyRateList__header">
          <CurrencyRateListRow
            cells={[
              'Валюта',
              'Название',
              'Курс'
            ]}
          />
        </div>
        <div className="CurrencyRateList__list">
          <List
            items={items}
            renderItem={this.renderItem}
            getItemId={getItemId}
          />
        </div>
      </div>
    );
  }
}

export default CurrencyRateList;
