import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select, Input, Button } from '../index';

class ConverterForm extends Component {

  static propTypes = {
    data: PropTypes.object,
    onCurrencyChange: PropTypes.func,
    options: PropTypes.array
  };

  render() {
    const { data, options } = this.props;

    return (
      <div className="ConverterForm">

      </div>
    );
  }
}

export default ConverterForm;
