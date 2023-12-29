import * as Actions from './action'
import initialState from '../store/initialState'

export const homesReducer = (state = initialState.homes,action)=> {
    switch (action.type) {
        case Actions.FETCH_HOMES:
            return{
                ...state,
                list:action.list
            }
            
        case Actions.CLEAR_HOMES:
            return{
                list:action.list
            }
    
        default:
            return state;
    }
}