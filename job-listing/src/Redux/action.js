import {
  ADD_JOB_LOADING,
  ADD_JOB_SUCCESS,
  ADD_JOB_ERROR,
  GET_JOB_LOADING,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR,
} from "./actionTypes";


export const addJobLoading = ()=>{
    return {type: ADD_JOB_LOADING}
}