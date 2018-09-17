import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Router, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import * as actions from "../../store/actions";
import { LayoutPage } from '../../components/layouts';
import { CurrencyRate } from '../index';
import { CurrencyConverter } from '../index';

class App extends Component {

  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  componentDidMount() {
    this.init();
  };

  async init() {
    await this.props.dispatch(actions.user.getUserCurrency());
  };

  render() {
    return (
      <LayoutPage>
        <Router history={this.history}>
          <Switch>
            <Route path="/" exact={true} component={CurrencyRate}/>
            <Route path="/converter" component={CurrencyConverter}/>
          </Switch>
        </Router>
      </LayoutPage>
    );
  }
}

export default connect(state => ({}))(App);
