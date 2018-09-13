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
    history: PropTypes.object,
  };

  componentDidMount() {
    this.init();
  };

  async init() {
    await this.props.dispatch(actions.location.getList());
  };

  onToggleFavouriteClick = (name) => () => {
    this.props.dispatch(actions.currency.toggleFavourite(name));
  };

  render() {
    const { currency } = this.props;
    return (
      <div className="CurrencyRate">
        <UserCurrency currency={'RUB'}/>
        <CurrencyRateList
          items={currency.list}
          onToggleFavouriteClick={this.onToggleFavouriteClick}
        />
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  currency: state.currency,
  location: state.location,
}))(CurrencyRate))
