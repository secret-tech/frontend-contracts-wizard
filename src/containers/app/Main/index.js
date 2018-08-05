import React from 'react';
import { Switch, withRouter } from 'react-router-dom';

import AuthWrapper from '../AuthWrapper';
import AppWrapper from '../AppWrapper';
import AuthRoute from '../../../components/app/AuthRoute';
import AppRoute from '../../../components/app/AppRoute';

import * as routes from '../../../routes';
import s from './styles.scss';

const Main = () => (
  <div className={s.app}>
    <Switch>
      <AuthRoute path={routes.AUTH} component={AuthWrapper}/>
      <AppRoute component={AppWrapper}/>
    </Switch>
  </div>
);

const ComponentWithRouter = withRouter(Main);
export default ComponentWithRouter;
