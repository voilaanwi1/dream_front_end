import {legacy_createStore as createStore , combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';

import { HomesReducer } from '../homes/reducers';
import { FavouritesReducer } from '../favoutite/reducers';
import { TagsReducer } from '../tags/reducers';
import { UserReducer } from '../users/reducers';



const reducers = combineReducers({
    homes: HomesReducer,
    favourites: FavouritesReducer,
    tags: TagsReducer,
    user: UserReducer
})


const store = createStore(
    reducers, applyMiddleware(thunk)
)


export default store