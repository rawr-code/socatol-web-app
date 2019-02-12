import {
	ActionsTypesCreator,
	ActionsCreator,
	ActionsCreatorsCreator
} from '../utils/Basics';

// Actions
export const Actions = ActionsCreator('product');
export const ActionsTypes = ActionsTypesCreator('product');
export const ActionsCreators = ActionsCreatorsCreator(Actions, 'product');

// Actions Creators
export const GET_ALL = ActionsCreators.GET_ALL('product');

export function GET(id) {
	return ActionsCreators.GET('product', id);
}

export function NEW(payload) {
	return ActionsCreators.NEW('product', payload);
}

export function UPDATE(id, payload) {
	return ActionsCreators.UPDATE('product', id, payload);
}

export function DELETE(payload) {
	return ActionsCreators.DELETE('product', payload);
}
