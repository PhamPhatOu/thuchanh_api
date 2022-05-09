import axios from 'axios';
import {
  all,
  call,
  takeEvery,
  put,
} from 'redux-saga/effects';

import {
  BACKEND_URL,
} from '../../libs/config';

import { INFORMATION } from './constants';

function* storeSystem(id, data) {
  yield put({
    type: INFORMATION.update,
    id,
    data,
  });
}

function* fetchInfo({ id }) {
  try {
    const infomation = yield call(() => new Promise((resolve, reject) => {
      const options = {
        responseType: 'json',
      };
      axios.post(`${BACKEND_URL}/crawl/department`, { province: id }, options).then((res) => {
        resolve(res.data);
      }).catch((res) => {
        reject(res);
      });
    }));
    yield* storeSystem(id, infomation);
  } catch (error) {
    yield* storeSystem(id);
    console.log(error);
  }
}

export default function* informationSaga() {
  yield all([
    yield takeEvery(INFORMATION.handlers.fetchInfo, fetchInfo),
  ]);
}
