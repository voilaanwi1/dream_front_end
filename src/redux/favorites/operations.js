import API from "../../API";
import {addFavoriteAction,deleteFavoriteAction,fetchFavoriteAction,errorFavoriteAction} from './action'

const api = new API()
export const fetchFavorites = () => {
    return async dispatch => {
        return api.getFavorites().then(favorites => {
            dispatch(fetchFavoriteAction(favorites))
        })
    }
}

export const addFavorites = (addFavoritesBody) =>{
    return async dispatch => {
        return api.addFavorites(addFavoritesBody).then(favorites =>{
            dispatch(addFavoriteAction(favorites))
        })
        .catch(errors => {
            dispatch(errorFavoriteAction(errors))

        })
    }
}

export const deleteOperationFavorites = (id) =>{
    return async dispatch => {
        return api.deleteFavorites(id).then(id => {
            dispatch(deleteFavoriteAction(id)).catch(error => {
                dispatch(errorFavoriteAction(error))
            })
        })
    }
}