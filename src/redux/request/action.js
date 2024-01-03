//request action...(type and payload)
//add sell request action...(type and list)
export const REQUEST_ACTION = 'REQUEST_ACTION'
export const requestAction = request => {
    return{
        type:'REQUEST_ACTION',
        payload:request
    };
};


export const ADD_SELL_REQUEST_ACTION = 'ADD_SELL_REQUEST_ACTION'
export const addSellRequestAction = request => {
    return{
        type : 'ADD_SELL_REQUEST_ACTION',
        list: request
    }
}

