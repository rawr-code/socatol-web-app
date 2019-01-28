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
export const GET_ALL = ActionsCreators.GET_ALL('warehouse');
