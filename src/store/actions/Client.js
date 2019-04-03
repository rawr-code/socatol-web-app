import {
  ActionsTypesCreator,
  ActionsCreator,
  ActionsCreatorsCreator
} from '../../utils/Basics';

// Actions
export const Actions = ActionsCreator('client');
export const ActionsTypes = ActionsTypesCreator('client');
export const ActionsCreators = ActionsCreatorsCreator(Actions, 'client');

// Actions Creators
export const GET_ALL = ActionsCreators.GET_ALL('client');

export function GET(id) {
  return ActionsCreators.GET('client', id);
}

export function NEW(payload) {
  return ActionsCreators.NEW('client', payload);
}

export function UPDATE(id, payload) {
  return ActionsCreators.UPDATE('client', id, payload);
}

export function DELETE(payload) {
  return ActionsCreators.DELETE('client', payload);
}
