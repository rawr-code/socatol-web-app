import { STATUS, WAREHOUSE } from "./ActionTypes";
import axios from "axios";
// Actions

// Status
export const Started = () => ({
  type: "STATUS.STARTED"
});

export const Success = res => ({
  type: "STATUS.SUCCESS,",
  payload: {
    ...res
  }
});

export const Failure = error => ({
  type: "STATUS.FAILURE,",
  payload: {
    error
  }
});

// Actions Creators
export function GET_ALL() {
  return dispatch => {
    console.log("hola");
  };
}
