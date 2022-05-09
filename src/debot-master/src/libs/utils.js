import axios from 'axios';
import moment from 'moment';

import {
  BACKEND_URL,
} from './config';

export const sendRequest = (
  action,
  params = {},
  responseType = 'json',
) => new Promise((resolve, reject) => {
  const fd = new FormData();
  fd.append('type', action);
  fd.append('data', JSON.stringify({
    ...params,
  }));
  const options = {
    responseType,
  };
  axios.post(`${BACKEND_URL}/userRequest`, fd, options).then((res) => {
    resolve(res.data);
  }).catch((res) => {
    reject(res);
  });
});

export const parseDate = (date) => moment(date).format('DD/MM/YYYY');
