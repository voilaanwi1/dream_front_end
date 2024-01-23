import {thunk} from 'redux-thunk'
import {homesReducer} from  '../homes/reducers'
import { favoriteReducer } from '../favorites/reducers'
import { tagsReducer } from '../tags/reducers'
import { userReducer } from '../users/reducers'
import { legacy_createStore as reduxCreateStore , combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { connectRouter, routerMiddleware } from 'connected-react-router'

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            homes : homesReducer, 
            favorites : favoriteReducer,
            tags : tagsReducer, 
            user : userReducer
        }), 
        composeWithDevTools(applyMiddleware(thunk))
    )
}
