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
        name={item.name}
        rate={item.rate}
        onClick={this.props.onClick}
      />
    );
  };

  render() {
    const { items } = this.props;
    return (
      <div className="CurrencyRateList">
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
            items={items}
            renderItem={this.renderItem}
          />
        </div>
      </div>
    );
  }
}

export default CurrencyRateList;
