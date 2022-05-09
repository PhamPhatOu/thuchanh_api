import {
  INFORMATION,
} from '../actions/constants';

const initialState = {
  handling: false,
  data: {},
};

export default function catalogs(state = initialState, { type, data, id } = {}) {
  switch (type) {
    case INFORMATION.handlers.fetchInfo:
      return {
        ...state,
        handling: true,
      };

    case INFORMATION.update: {
      const updateData = {
        ...state.data,
        [id]: data,
      };
      return {
        ...state,
        data: updateData,
        handling: false,
      };
    }

    default:
      return state;
  }
}
