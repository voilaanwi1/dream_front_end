import initialState from "../store/initialState";
import * as Actions from "./action";

export const userReducer = (state = initialState.user,action) => {
    switch (action.type) {
        case Actions.SIGN_UP:
            return{
                ...state,
                ...action.payload
            }
        case Actions.SIGN_IN:
            return{
                ...state,
                ...action.payload
            }
        case Actions.SIGN_OUT:
            return{
                ...state,
            }

    
        default:
            return state
    }

}