import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";
import {UserCurrency} from '../../components/elements/index';

class CurrencyRate extends Component {

  static propTypes = {
    currency: PropTypes.object.isRequired,
    history: PropTypes.object,
  };

  componentDidMount() {
    this.init();
  };

  async init() {
    await this.props.dispatch(actions.currency.getList());
    await this.props.dispatch(actions.location.getList());
  };

  render() {
    return (
      <div className="CurrencyRate">
        <UserCurrency currency={'RUB'}/>
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  currency: state.currency,
  location: state.location,
}))(CurrencyRate))
