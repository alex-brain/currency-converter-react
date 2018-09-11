import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {themes} from '../../../utils';
import './styles.scss';

export default class CurrencyRateListRow extends Component {

  static propTypes = {
    cells: PropTypes.arrayOf(PropTypes.node),
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  };

  render() {
    const { cells, theme } = this.props;
    return (
      <div className={cn(`CurrencyRateListRow`, themes('CurrencyRateListRow', theme))}>
        <div className={cn(`CurrencyRateListRow__cell CurrencyRateListRow__cell_theme_sm`, themes('CurrencyRateListRow__cell', theme))}>{cells[0]}</div>
        <div className={cn(`CurrencyRateListRow__cell CurrencyRateListRow__cell_theme_bg`, themes('CurrencyRateListRow__cell', theme))}>{cells[1]}</div>
        <div className={cn(`CurrencyRateListRow__cell CurrencyRateListRow__cell_theme_sm`, themes('CurrencyRateListRow__cell', theme))}>{cells[2]}</div>
        {cells[3] && (
          <div className={cn(`CurrencyRateListRow__cell CurrencyRateListRow__cell_theme_bg`, themes('CurrencyRateListRow__cell', theme))}>{cells[3]}</div>
        )}
      </div>
    );
  }
}