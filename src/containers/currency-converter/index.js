import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";
import { Converter } from '../../components/elements';
import { HeaderContainer } from '../index';

class CurrencyConverter extends Component {

  static propTypes = {
    converterForm: PropTypes.object.isRequired,
    converter: PropTypes.object.isRequired,
    history: PropTypes.object,
  };

  onCurrencyChange = (data) => {
    this.props.dispatch(actions.converterForm.changeValues(data));
  };

  onSubmit = () => {
    this.props.dispatch(actions.converterForm.submit());
  };

  render() {
    const { data, options, errors } = this.props.converterForm;
    const { rate, wait } = this.props.converter;

    return (
      <div className="CurrencyConverter">
        <HeaderContainer/>
        <Converter
          data={data}
          rate={rate}
          options={options}
          errors={errors}
          wait={wait}
          onCurrencyChange={this.onCurrencyChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  converterForm: state.converterForm,
  converter: state.converter,
}))(CurrencyConverter))
