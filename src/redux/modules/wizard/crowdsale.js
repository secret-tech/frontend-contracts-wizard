import { Map } from 'immutable';
import { createReducer, createAction } from '../../../utils/actions';

const initialState = Map({
  walletAddress: '',
  minContribution: '',
  gasPrice: '',
  whitelist: true,
  kyc: true
});

export default createReducer({}, initialState);
