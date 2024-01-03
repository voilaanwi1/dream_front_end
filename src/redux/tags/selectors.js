import { createSelector } from "reselect";
const tagSelector = state => state.tags
export const gettags =createSelector([tagSelector],state => state.list)