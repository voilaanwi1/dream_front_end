import * as Actions from './action'
import initialState from '../store/initialState'

export const tagsReducer = (state = initialState.tags,action)=> {
    switch (action.type) {
        case Actions.FETCH_TAGS:
            return{
                ...state,
                list:action.list
            }
        default:
            return state
        }
    }