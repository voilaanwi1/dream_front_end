import { CreateSelector, createSelector } from "reselect";

const userSelector= state => state.user
 export const postRequest= createSelector([userSelector],state => state)