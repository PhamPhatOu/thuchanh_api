import {
  all,
} from 'redux-saga/effects';

import catalogsSaga from './catalogs';
import informationSaga from './information';

export default function* rootSaga() {
  yield all([
    catalogsSaga(),
    informationSaga(),
  ]);
}
