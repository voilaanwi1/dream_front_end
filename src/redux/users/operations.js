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
        if (user_name === '' || email === '' || password === ''){
            alert('please fill out name,email,and password')
            return false
        }
        return api 

        .signUp(user_name, email, password)
        .then(user =>{
            dispatch(signUpAction(user));
            localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
            dispatch(push('/'))
        })
        .catch(error=>{
            alert('Failed to connect API to add a post')
            console.log('error')
        })
    };

    
}

export const signIn = ({email, password}, onSuccess)=>{
    return async dispatch =>{
        if(email ===''||password===''){
            alert('Please fill out email and password')
            return false
        }

        return api
        .signIn(email, password)
        .then(user=>{
            dispatch(signInAction(user));
            localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user))
            console.log(localStorage.getItem(LOGIN_USER_KEY))
            onSuccess()
        })
        .catch(error=>{
            alert('Failed to connect API to add a post');
            console.log(error)
        })
    };
};

export const signOut =()=>{
    return async dispatch=>{
        dispatch(signOutAction());
        localStorage.removeItem(LOGIN_USER_KEY);
        dispatch(push('/signin'))
    }
}