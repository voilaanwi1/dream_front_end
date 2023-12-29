export const ADD_FAVORITE = 'ADD_FAVORITE'
export const addFavoriteAction = favorite=>{
    return{
        type: 'ADD_FAVORITE',
        list:favorite
    }
}

export const DELETE_FAVORITE = 'DELETE_FAVORITE'
export const deleteFavoriteAction = id => {
    return{
        type: 'DELETE_FAVORITE',
        payload:id
    }
}

export const FETCH_FAVORITE = 'FETCH_FAVORITE'
export const fetchFavoriteAction = favorite =>{
    return{
        type: 'FETCH_FAVORITE',
        list:favorite
    }
}

export const ERROR_FAVORITE = 'ERROR_FAVORITE'
export const errorFavoriteAction = errors =>{
    return{
        type: 'ERROR_FAVORITE',
        payload: errors
    }
}