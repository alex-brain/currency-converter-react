import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class UserCurrency extends Component {

  static propTypes = {
    currency: PropTypes.string
  };

  render() {
    const { currency } = this.props;
    return (
      <div className="UserCurrency">
        Ваша валюта: <span className="UserCurrency_text-bold">{currency}</span>
      </div>
    );
  }
}

export default UserCurrency;
