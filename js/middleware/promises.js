import {API_CALL} from '../constants/index.js';

export default function () {
  return (next) => (action) => {
    if (action.type !== API_CALL) {
      return next(action);
    }

    const {promise, types} = action.payload;

    const [REQUEST, SUCCESS, FAILURE] = types;

    next({type: REQUEST });

    return promise
      .then(
      result => next({
        payload: {result},
        type: SUCCESS,
      }),
      error => next({
        payload: {error},
        type: FAILURE
      })
    );
  };
}
