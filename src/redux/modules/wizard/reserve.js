import { List, Map } from 'immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const ADD_RESERVE = 'wizard/reserve/ADD_RESERVE';
export const REMOVE_RESERVE = 'wizard/reserve/REMOVE_RESERVE';


export const addReserve = createAction(ADD_RESERVE);
export const removeReserve = createAction(REMOVE_RESERVE);

const initialState = List([
  Map({
    name: '',
    address: '',
    amount: ''
  })
]);

export default createReducer({
  [ADD_RESERVE]: (state, { payload }) => (
    state.push(payload)
  ),

  [REMOVE_RESERVE]: (state, { payload }) => (
    state.reduce((acc, value) => (value.address === payload ? [...acc] : [acc, value]), [])
  )
}, initialState);
