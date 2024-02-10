import API from '../../API';
import { requestAction } from './action';


const api = new API();

export const sellrequest = (params, navigate) => {
    return async dispatch => {
        return api
            .sellrequest(params)
            .then(sellrequest => {
                dispatch(requestAction(sellrequest));
                navigate('/thankyou');
            })
            .catch(error => {
                alert('Failed to connect API to add a post');
                console.log(error);
            });
    };
};
