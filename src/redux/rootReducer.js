import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form';

import counter from './modules/app/counter';
import steps from './modules/wizard/steps';

export default combineReducers({
  form,

  app: combineReducers({
    counter
  }),

  wizard: combineReducers({
    steps
  })
});
