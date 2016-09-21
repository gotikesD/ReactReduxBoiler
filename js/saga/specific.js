import { takeEvery } from 'redux-saga';
import { put, take } from 'redux-saga/effects';

import { sagaSpecific, sagaSpecificResultStep1, sagaSpecificResultStep2 } from '../actions/initial';


import { SPECIFIC_ACTION , API_TEST_SUCCESS } from '../constants';

function* specificHold(action) {
  yield put(sagaSpecificResultStep1());
  yield take(API_TEST_SUCCESS);
  yield put(sagaSpecificResultStep2());
  yield take(API_TEST_SUCCESS);
}

export default function* specific() {
  yield* takeEvery(SPECIFIC_ACTION, specificHold);
}

