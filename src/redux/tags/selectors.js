import { createSelector } from "reselect";
const tagSelector = state => state.tags
export const getTags =createSelector([tagSelector],state => state.list)