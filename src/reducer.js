import constants from "./constants";

export const initialState = {
  names: [],
  technologies: [],
  ages: {},
  isLoading: false,
  isError: false,
  error: null,
};

export function appReducer(state, action) {
  switch (action.type) {
    case constants.INIT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case constants.REQUEST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };

    case constants.REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
  
    default:
      return state;
  }
}