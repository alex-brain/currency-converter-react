import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConverterForm } from '../index';
import './style.scss';

class Converter extends Component {

  static propTypes = {
    data: PropTypes.object,
    onCurrencyChange: PropTypes.func,
    onSubmit: PropTypes.func,
    options: PropTypes.array,
    errors: PropTypes.object
  };

  render() {
    const { data, options, errors, onCurrencyChange, onSubmit } = this.props;
    return (
      <div className="Converter">
        <div className="Converter__form">
          <ConverterForm
            options={options}
            data={data}
            errors={errors}
            onSubmit={onSubmit}
            onCurrencyChange={onCurrencyChange}
          />
        </div>
        <div className="Converter__result">
          Результат конвертирования
        </div>
      </div>
    );
  }
}

export default Converter;
