import React from "react";
import axios from "axios";
// Actions
export const STATUS = {
  STARTED: "STARTED",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE"
};

const WAREHOUSE = {
  GET_ALL_WAREHOUSES: "GET_ALL_WAREHOUSES",
  GET_WAREHOUSE: "GET_WAREHOUSE",
  NEW_WAREHOUSE: "NEW_WAREHOUSE",
  UPDATE_WAREHOUSE: "UPDATE_WAREHOUSE",
  DELETE_WAREHOUSE: "DELETE_WAREHOUSE"
};

// ACtions
export const Started = () => ({
  type: STATUS.STARTE
});

export const Success = res => ({
  type: STATUS.SUCCESS,
  payload: {
    ...res
  }
});

export const Failure = error => ({
  type: STATUS.FAILURE,
  payload: {
    error
  }
});

// Actions Creators
export function GET_ALL() {
  return dispatch => {
    dispatch(Started());

    axios
      .get("http://localhost:5000/api/product")
      .then(res => {
        dispatch(Success(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(Failure(err.message));
      });
  };
}
