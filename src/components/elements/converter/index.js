import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConverterForm, Preloader } from '../index';
import './style.scss';

class Converter extends Component {

  static propTypes = {
    data: PropTypes.object,
    rate: PropTypes.number,
    onCurrencyChange: PropTypes.func,
    onSubmit: PropTypes.func,
    options: PropTypes.array,
    errors: PropTypes.object,
    wait: PropTypes.bool
  };

  render() {
    const { data, options, errors, onCurrencyChange, onSubmit, rate, wait } = this.props;
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
        {wait ? (
          <Preloader/>
        ) : (
          rate !== null && (
            <div className="Converter__result">
              Результат: {rate}
            </div>
          )
        )}

      </div>
    );
  }
}

export default Converter;
