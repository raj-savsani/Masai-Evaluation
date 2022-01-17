import {
  ADD_JOB_LOADING,
  ADD_JOB_SUCCESS,
  ADD_JOB_ERROR,
  GET_JOB_LOADING,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR,
} from "./actionTypes";

const init = { loading: false, jobs: [], error: false };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_JOB_LOADING:
      return { ...state, loading: true };
    case ADD_JOB_SUCCESS:
      return { ...state, jobs: [...state.jobs, payload], loading: false };
    case ADD_JOB_ERROR:
      return { ...state, loading: false, error: true };
    case GET_JOB_LOADING:
      return { ...state, loading: true };
    case GET_JOB_SUCCESS:
      return { ...state, jobs: payload, loading: false };
    case GET_JOB_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
