import {INITIAL, API_CALL, API_TEST_FAILTURE ,API_TEST_START, API_TEST_SUCCESS ,SPECIFIC_ACTION} from '../constants/';
import axios from 'axios';

export function initial() {
  return {
    type: API_CALL,
    payload: {
      types: [
        API_TEST_START,
        API_TEST_SUCCESS,
        API_TEST_FAILTURE,
      ],
      promise: axios('http://google.ru')
    }
  };
}

export function sagaSpecific() {
  return {
    type : SPECIFIC_ACTION,
    payload : {
      specific : 'Yap'
    }
  }
}

export function sagaSpecificResultStep1() {
  return {
    type : API_CALL,
    payload: {
      types: [
        API_TEST_START,
        API_TEST_SUCCESS,
        API_TEST_FAILTURE,
      ],
      promise: axios('http://yandex.ru')
    }
  }
}


export function sagaSpecificResultStep2() {
  return {
    type : API_CALL,
    payload: {
      types: [
        API_TEST_START,
        API_TEST_SUCCESS,
        API_TEST_FAILTURE,
      ],
      promise: axios('http://yandex.ru')
    }
  }
}