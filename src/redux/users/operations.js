import API,{LOGIN_USER_KEY}  from '../../API' 
import { signInAction,signUpAction,signOutAction } from './action'
import { useNavigate } from 'react-router'

const api = new API()    // created an object of API class 

export const fetchUserFromLocalStorage = () => {
    return async dispatch => {
        const userJSON= localStorage.getItem(LOGIN_USER_KEY)
        if (userJSON && userJSON.token !== '') {
            dispatch(signInAction(JSON.parse(userJSON)))
        }
    }
}

export const signUp = (user_name,email,password) => {
    return async dispatch => {
        if (user_name === '' || email === '' || password === '')
    }
}