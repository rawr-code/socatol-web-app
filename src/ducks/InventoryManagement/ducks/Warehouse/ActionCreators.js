import axios from "axios";

// Actions Creators
export function GET_ALL() {
  return dispatch => {
    dispatch(STATUS.Started());

    axios
      .get("http://localhost:5000/api/product")
      .then(res => {
        dispatch(STATUS.Success(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(STATUS.Failure(err.message));
      });
  };
}
