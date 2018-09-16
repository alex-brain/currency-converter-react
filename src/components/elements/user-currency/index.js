import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from '../index';
import './index.scss';

class UserCurrency extends Component {

  static propTypes = {
    options: PropTypes.array,
    data: PropTypes.string,
    onCurrencyChange: PropTypes.func
  };

  render() {
    const { options, data, onCurrencyChange } = this.props;
    return (
      <div className="UserCurrency">
        <div className="UserCurrency__label">Ваша валюта:</div>
        <div className="UserCurrency__select">
          <Select
            options={[{name: data}, ...options]}
            data={data}
            onChange={onCurrencyChange}
          />
        </div>
      </div>
    );
  }
}

export default UserCurrency;