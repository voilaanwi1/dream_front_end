import { createSelector } from "reselect";
const homeSelector = state => state.homes
export const gethomes =createSelector([homeSelector],state => state.list)