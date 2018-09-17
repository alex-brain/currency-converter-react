import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import './style.scss';

class MenuTop extends Component {

  static propTypes = {
    items: PropTypes.array
  };

  render() {
    const { items } = this.props;
    return (
      <div className="MenuTop">
       <ul className="MenuTop__list">
         {items.map((item, index) => (
           <li
             key={index}
             className={cn("MenuTop__item ", {"MenuTop__item_active": item.active})}>
             <Link to={item.to} className="MenuTop__link">{item.title}</Link>
           </li>
         ))}
       </ul>
      </div>
    );
  }
}

export default MenuTop;
