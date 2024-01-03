import initialState from "../store/initialState";
import * as Actions from "./action";

export const userReducer = (state = initialState.user,action) => {
    switch (action.type) {
        case Actions.REQUEST_ACTION:
            return{
                ...state,
                ...action.payload
            }
        case Actions.ADD_SELL_REQUEST_ACTION:
            return{
                ...state,
                ...action.payload
            }
            default:
                return state

        }
    }
        
            