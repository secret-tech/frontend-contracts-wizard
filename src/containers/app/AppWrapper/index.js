import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Wizard from '../../wizard/Wizard';

import * as routes from '../../../routes';

class AppWrapper extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={routes.WIZARD} component={Wizard}/>
        <Redirect exact from="/" to={routes.WIZARD} />
      </Switch>
    );
  }
}

export default connect()(AppWrapper);
