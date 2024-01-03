import { CreateSelector, createSelector } from "reselect";

const userSelector= state => state.user
 export const getRequest= createSelector([userSelector],state => state)