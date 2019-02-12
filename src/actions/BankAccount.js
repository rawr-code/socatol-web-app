import {
	ActionsTypesCreator,
	ActionsCreator,
	ActionsCreatorsCreator
} from '../utils/Basics';

// Actions
export const Actions = ActionsCreator('account');
export const ActionsTypes = ActionsTypesCreator('account');
export const ActionsCreators = ActionsCreatorsCreator(Actions, 'account');

// Actions Creators
export const GET_ALL = ActionsCreators.GET_ALL('account');

export function GET(id) {
	return ActionsCreators.GET('account', id);
}

export function NEW(payload) {
	return ActionsCreators.NEW('account', payload);
}

export function UPDATE(id, payload) {
	return ActionsCreators.UPDATE('account', id, payload);
}

export function DELETE(payload) {
	return ActionsCreators.DELETE('account', payload);
}
