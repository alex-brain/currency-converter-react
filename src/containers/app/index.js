import React, { Component } from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {LayoutPage} from '../../components/layouts';
import Converter from '../converter';
import CurrencyRate from '../currency-rate';

class App extends Component {

  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    return (
      <LayoutPage>
        <Router history={this.history}>
          <Switch>
            <Route path="/" exact={true} component={CurrencyRate}/>
            <Route path="/converter" component={Converter}/>
          </Switch>
        </Router>
      </LayoutPage>
    );
  }
}

export default App;
