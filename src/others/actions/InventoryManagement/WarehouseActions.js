import {
  ActionsTypesCreator,
  ActionsCreator,
  ActionsCreatorsCreator,
} from '../Basics';

// Actions
export const Actions = ActionsCreator('Warehouse');
export const ActionsTypes = ActionsTypesCreator('Warehouse');
export const ActionsCreators = ActionsCreatorsCreator(Actions, 'Warehouse');

// Actions Creators
export function GET_ALL() {
  return ActionsCreators.GET_ALL('http://localhost:5000/api/product');
}
