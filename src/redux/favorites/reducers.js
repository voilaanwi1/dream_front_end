import initialState from "../store/initialState";
import * as Actions from "./action"

export const favoriteReducer=(state=initialState.favorites,action) =>{
    switch (action.type) {
        case Actions.ADD_FAVORITE:
            return{
                ...state,
                list: action.list
            }

        case Actions.DELETE_FAVORITE:
            return{
                ...state,
                payload: action.payload
            }

        case Actions.FETCH_FAVORITE:
            return{
                ...state,
                list: action.list
            }

        case Actions.ERROR_FAVORITE:
            return{
                ...state,
                list: action.list
            }

        default:
            return state

    }
}


