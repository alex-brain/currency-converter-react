import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {detectActive} from "../../utils";
import { Menu } from '../../components/elements';

class HeaderContainer extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  state = ({
    items: detectActive([
      {title: 'Курсы валют', to: '/', active: false},
      {title: 'Конвертер', to: '/converter', active: false},
    ], this.props.location)
  });

  componentDidUpdate(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.setState({
        items: detectActive(this.state.items, nextProps.location)
      });
    }
  }

  render() {
    return (
      <Menu items={this.state.items} />
    );
  }
}

export default withRouter(HeaderContainer);
