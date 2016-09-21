'use strict';
import {INITIAL, API_TEST_START, API_TEST_SUCCESS, API_TEST_FAILTURE} from '../constants/';
import {Map } from 'immutable';

const initialState = Map({
  html : null,
  loading : false,
  error : null
})


export default function PaymentState(state = initialState, action) {
  switch (action.type) {

    case API_TEST_START:
      return state.set('loading', true);
      break;

    case API_TEST_SUCCESS:
      return state.merge({loading : false, html : action.payload.result.data});
      break;

    case API_TEST_FAILTURE:
      return state.merge({loading : false, error : action.payload.error });
      break;

    default:
      return state;
  }
}

