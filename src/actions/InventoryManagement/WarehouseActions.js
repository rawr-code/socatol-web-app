import axios from "axios";

// Actions
export const STATUS = {
  STARTED: "STARTED",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE"
};

export const WAREHOUSE = {
  GET_ALL_WAREHOUSES: "GET_ALL_WAREHOUSES",
  GET_WAREHOUSE: "GET_WAREHOUSE",
  NEW_WAREHOUSE: "NEW_WAREHOUSE",
  UPDATE_WAREHOUSE: "UPDATE_WAREHOUSE",
  DELETE_WAREHOUSE: "DELETE_WAREHOUSE"
};

// Actions
export const Started = () => ({
  type: STATUS.STARTED
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
  console.log("llegue");
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
