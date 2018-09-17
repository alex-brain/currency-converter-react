import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConverterForm } from '../index';
import './style.scss';

class Converter extends Component {

  static propTypes = {
    data: PropTypes.object,
    rate: PropTypes.number,
    onCurrencyChange: PropTypes.func,
    onSubmit: PropTypes.func,
    options: PropTypes.array,
    errors: PropTypes.object
  };

  render() {
    const { data, options, errors, onCurrencyChange, onSubmit, rate } = this.props;
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
        {rate !== null && (
          <div className="Converter__result">
            Результат: {rate}
          </div>
        )}
      </div>
    );
  }
}

export default Converter;
