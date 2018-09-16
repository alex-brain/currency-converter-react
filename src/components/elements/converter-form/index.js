import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select, Input, Button } from '../index';
import './style.scss';

class ConverterForm extends Component {

  static propTypes = {
    data: PropTypes.object,
    onCurrencyChange: PropTypes.func,
    onSubmit: PropTypes.func,
    options: PropTypes.array,
    errors: PropTypes.object
  };

  onChangeField = (name) => {
    return (value) => {
      const data = {
        ...this.props.data,
        [name]: value
      };
      this.props.onCurrencyChange(data);
    };
  };

  render() {
    const { data, options, onSubmit, errors } = this.props;

    return (
      <div className="ConverterForm">
        <div className="ConverterFormInput">
          <div className="ConverterFormInput__input">
            <Input
              placeholder={'Количество'}
              value={data.amount}
              onChange={this.onChangeField('amount')}
            />
          </div>
          {errors && errors.amount && (
            <div className="ConverterFormInput__errors">
              {errors.amount}
            </div>
          )}
        </div>
        <div className="ConverterFormInput">
          <div className="ConverterFormInput__select">
            <Select
              options={options}
              data={data.firstCurrency}
              label={'Первая валюта'}
              onChange={this.onChangeField('firstCurrency')}
            />
          </div>
          {errors && errors.firstCurrency && (
            <div className="ConverterFormInput__errors">
              {errors.firstCurrency}
            </div>
          )}
        </div>
        <div className="ConverterFormInput">
          <div className="ConverterFormInput__select">
            <Select
              options={options}
              data={data.secondCurrency}
              label={'Вторая валюта'}
              onChange={this.onChangeField('secondCurrency')}
            />
          </div>
          {errors && errors.secondCurrency && (
            <div className="ConverterFormInput__errors">
              {errors.secondCurrency}
            </div>
          )}
        </div>
        <div className="ConverterFormInput">
          <Button
            onClick={onSubmit}
            theme={'blue'}>
            Рассчитать
          </Button>
        </div>
      </div>
    );
  }
}

export default ConverterForm;
