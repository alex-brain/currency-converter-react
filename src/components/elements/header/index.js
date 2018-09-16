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
        <div className="ConverterFormInput">
          <div className="ConverterFormInput__input">
            <Input
              placeholder={'Количество'}
              value={data.amount}
              onChange={this.onChangeField('amount')}
            />
          </div>
          <div className="ConverterFormInput__errors">

          </div>
        </div>
        <div className="ConverterFormInput">
          <Select
            options={options}
            data={data.firstCurrency}
            label={'Первая валюта'}
            onChange={this.onChangeField('firstCurrency')}
          />
        </div>
        <div className="ConverterFormInput">
          <Select
            options={options}
            data={data.secondCurrency}
            label={'Вторая валюта'}
            onChange={this.onChangeField('secondCurrency')}
          />
        </div>
        <div className="ConverterFormInput">
          <Button onClick={() => {
          }} theme={'blue'}>
            Рассчитать
          </Button>
        </div>
      </div>
    );
  }
}

export default ConverterForm;
