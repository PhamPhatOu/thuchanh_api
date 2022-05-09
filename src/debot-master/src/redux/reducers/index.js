import {
  reducer as notifications,
} from 'react-redux-toastr';
import {
  combineReducers,
} from 'redux';

import catalogs from './catalogs';
import information from './information';

const rootReducer = combineReducers({
  toastr: notifications,
  catalogs,
  information,
});

export default rootReducer;
