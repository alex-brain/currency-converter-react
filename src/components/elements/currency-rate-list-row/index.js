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

  static defaultProps = {
    theme: 'default'
  };

  render() {
    const { cells, theme } = this.props;
    return (
      <div className={cn(`CurrencyRateListRow`, themes('CurrencyRateListRow', theme))}>
        <div className={cn(`CurrencyRateListRow__cell CurrencyRateListRow__cell_theme_bg`, themes('CurrencyRateListRow__cell', theme))}>{cells[0]}</div>
        <div className={cn(`CurrencyRateListRow__cell CurrencyRateListRow__cell_theme_bg`, themes('CurrencyRateListRow__cell', theme))}>{cells[1]}</div>
        <div className={cn(`CurrencyRateListRow__cell CurrencyRateListRow__cell_theme_md CurrencyRateListRow__cell_theme_center`, themes('CurrencyRateListRow__cell', theme))}>{cells[2]}</div>
      </div>
    );
  }
}