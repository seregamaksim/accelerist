import { RootState } from '../store';

export const selectSavedList = (state: RootState) => state.savedList.items;
export const selectMetaData = (state: RootState) => state.savedList.meta;
