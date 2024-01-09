import API from "../../API";
import { requestAction } from "./action";
import { useNavigate } from "react-router";

const api = new API()
export const sellRequest = (params) => {
    return async dispatch => {
        return api.sellRequest(params). then(sellRequest => {
            dispatch(requestAction(sellRequest))
            dispatch(useNavigate('/thank you'))
        })
        .catch(errors => {
            alert('failed to connect api to add a post')
            console.log(errors)
        })
    }
}