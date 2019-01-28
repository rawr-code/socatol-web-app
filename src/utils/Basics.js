import API from '../API';
import { createActions } from 'redux-actions';

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
    GET: (url, id) => async dispatch => {
      try {
        dispatch(ActionsList.Started());
        const result = await API.get(`${url}/${id}`);
        if (result) {
          dispatch(ActionsList.Success());
          dispatch(ActionsList.Get(result.data));
        }
      } catch (err) {
        dispatch(ActionsList.Failure(err.message));
      }
    },

    GET_ALL: url => async dispatch => {
      try {
        dispatch(ActionsList.Started());
        const result = await API.get(url);
        if (result) {
          dispatch(ActionsList.Success());
          dispatch(ActionsList.GetAll(result.data));
        }
      } catch (err) {
        dispatch(ActionsList.Failure(err.message));
      }
    },

    NEW: (url, payload) => async dispatch => {
      try {
        dispatch(ActionsList.Started());
        const result = await API.post(url, payload);
        if (result) {
          dispatch(ActionsList.Success());
          dispatch(ActionsList.GetAll());
        }
      } catch (err) {
        dispatch(ActionsList.Failure(err.message));
      }
    },

    UPDATE: (url, id, payload) => async dispatch => {
      dispatch(ActionsList.Started());
      const result = await API.patch(`${url}/${id}`, payload);
      if (result) {
        dispatch(ActionsList.Success());
        // Modificar Action
        setTimeout(() => {
          dispatch(ActionsList.GetAll(result.data));
        }, 2000);
      }
    },

    DELETE: (url, id) => async dispatch => {
      dispatch(ActionsList.Started());
      const result = await API.delete(url, id);
      if (result) {
        dispatch(ActionsList.Success());
        // Modificar Action
        setTimeout(() => {
          dispatch(ActionsList.GetAll(result.data));
        }, 2000);
      }
    }
  };

  return Methods;
};
