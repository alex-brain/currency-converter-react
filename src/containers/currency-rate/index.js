import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";
import { UserCurrency } from '../../components/elements';
import CurrencyRateList from "../../components/elements/currency-rate-list/index";

class CurrencyRate extends Component {

  static propTypes = {
    currency: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    history: PropTypes.object,
  };

  onToggleFavouriteClick = (name) => () => {
    this.props.dispatch(actions.currency.toggleFavourite(name));
  };

  onCurrencyChange = (data) => {
    this.props.dispatch(actions.user.changeUserCurrency(data));
  };

  render() {
    const { currency, user } = this.props;
    return (
      <div className="CurrencyRate">
        <UserCurrency
          onCurrencyChange={this.onCurrencyChange}
          options={currency.list}
          data={user.currency}
        />
        <CurrencyRateList
          currency={currency.list}
          favourite={currency.favourite}
          onToggleFavouriteClick={this.onToggleFavouriteClick}
        />
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  currency: state.currency,
  user: state.user,
}))(CurrencyRate))
