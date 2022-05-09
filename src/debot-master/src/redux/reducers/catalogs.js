import {
  CATALOGS,
} from '../actions/constants';

const initialState = {
  cities: {
    data: {},
  },
};

export default function catalogs(state = initialState, { type, data, id } = {}) {
  switch (type) {
    case CATALOGS.handlers.getCities:
      return {
        ...state,
        cities: {
          handling: true,
        },
      };

    case CATALOGS.update:
      return {
        ...state,
        [id]: {
          data,
          handling: false,
        },
      };

    default:
      return state;
  }
}
