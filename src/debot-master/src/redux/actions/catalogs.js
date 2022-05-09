import axios from 'axios';
import {
  all,
  call,
  takeEvery,
  put,
} from 'redux-saga/effects';

import {
  RESOURCES,
} from '../../libs/config';

import { CATALOGS } from './constants';

function* storeSystem(id, data) {
  yield put({
    type: CATALOGS.update,
    id,
    data,
  });
}

function* getCities() {
  try {
    const cities = yield call(() => new Promise((resolve, reject) => {
      axios.get(`${RESOURCES}/cities.json`).then((response) => {
        const {
          status, data,
        } = response;
        if (status === 200 && data) resolve(data);
        else reject(new Error(status));
      }).catch((err) => reject(err));
    }));
    yield* storeSystem('cities', cities);
  } catch (error) {
    yield* storeSystem('cities');
    console.log(error);
  }
}

export default function* catalogsSaga() {
  yield all([
    yield takeEvery(CATALOGS.handlers.getCities, getCities),
  ]);
}
