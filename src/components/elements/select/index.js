import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {themes} from '../../../utils';

export default class Select extends Component {

  static propTypes = {
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    options: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    onChange: () => {
    }
  };

  onChange = (e) => {
    e.preventDefault();
    this.props.onChange(e.target.options[e.target.selectedIndex].value);
  };

  render() {
    const { theme, options, data, disabled } = this.props;
    return (
      <div className={cn('Select__container', themes('Select', theme))}>
        <select
          onChange={this.onChange}
          className="Select"
          value={data}
          disabled={disabled}>
          <option value={data} className="Select__option">
            {data}
          </option>
          {
            options && options.map((item, index) => {
              return (
                <option value={item.name} className="Select__option" key={index}>
                  {item.name}
                </option>
              );
            })
          }
        </select>
      </div>
    );
  }
}
