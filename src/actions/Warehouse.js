import {
  ActionsTypesCreator,
  ActionsCreator,
  ActionsCreatorsCreator
} from '../utils/Basics';

// Actions
export const Actions = ActionsCreator('warehouse');
export const ActionsTypes = ActionsTypesCreator('warehouse');
export const ActionsCreators = ActionsCreatorsCreator(Actions, 'warehouse');

// Actions Creators
export function GET_ALL() {
  return ActionsCreators.GET_ALL('warehouse');
}
