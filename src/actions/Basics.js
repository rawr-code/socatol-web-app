import axios from "axios";
import { createAction, createActions } from "redux-actions";

// Action Types Creator
export const ActionsTypesCreator = name => ({
  STARTED: `${name}_STARTED`,
  SUCCESS: `${name}_SUCCESS`,
  FAILURE: `${name}_FAILURE`,
  GET: `${name}_GET`,
  NEW: `${name}_NEW`,
  GET_ALL: `${name}_GET_ALL`,
  UPDATE: `${name}_UPDATE`,
  DELETE: `${name}_DELETE`
});

// Actions Creator
export const ActionsCreator = name =>
  createActions(
    `${name}_STARTED`,
    `${name}_SUCCESS`,
    `${name}_FAILURE`,
    `${name}_GET`,
    `${name}_NEW`,
    `${name}_GET_ALL`,
    `${name}_UPDATE`,
    `${name}_DELETE`
  );

// Actions Creators Creator
export const ActionsCreatorsCreator = (Actions, name) => {
  const nameLower = name.toLowerCase();
  const ActionsList = {
    Started: Actions[`${nameLower}Started`],
    Success: Actions[`${nameLower}Success`],
    Failure: Actions[`${nameLower}Failure`],

    Get: Actions[`${nameLower}Get`],
    GetNew: Actions[`${nameLower}New`],
    GetAll: Actions[`${nameLower}GetAll`],
    Update: Actions[`${nameLower}Update`],
    Delete: Actions[`${nameLower}Delete`]
  };

  const Methods = {
    GET_ALL: url => async dispatch => {
      dispatch(ActionsList.Started());
      const result = await axios.get(url);
      if (result) {
        dispatch(ActionsList.Success());
        setTimeout(() => {
          dispatch(ActionsList.GetAll(result.data));
        }, 2000);
      }
    }
  };

  return Methods;
};

// Actions Types
export const STATUS = {
  STARTED: "STARTED",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE"
};

export const API = {
  GET_ALL: ({ name, url, started }) => async dispatch => {
    dispatch(started);
  }
  // return async dispatch => {
  //   dispatch(Started());
  //   const result = await axios.get("http://localhost:5000/api/product");
  //   if (result) {
  //     dispatch(Success());
  //     setTimeout(() => {
  //       dispatch({
  //         type: `Warehouse_GET_ALL`,
  //         payload: result.data
  //       });
  //     }, 2000);
  //   }
  // };
};
// GET: "GET",
// NEW: "NEW",
// UPDATE: "UPDATE",
// DELETE: "DELETE"

// Status Actions
export const Started = createAction(STATUS.STARTED);
export const Success = createAction(STATUS.SUCCESS);
export const Failure = createAction(STATUS.FAILURE);
