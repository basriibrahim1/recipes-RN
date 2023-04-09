const initialState = {
    data: [],
    isError: null,
    isLoading: false,
    isSuccess: true
}


 const UserReducers = (state = initialState, action) => {
    switch(action.type){
        case "USER_REQUEST" : 
        return {
            ...state,
            data: [],
            isError: null,
            isLoading: true,
            isSuccess: false
        }
        case 'USER_SUCCESS' :
        return {
            ...state,
            data: action.payload,
            isError: null,
            isLoading: false,
            isSuccess: true
        }
        case 'USER_FAILURE' :
        return {
            ...state,
            data: [],
            isError: action.payload,
            isLoading: false,
            isSuccess: false
        }
        default:
            return state
    }
}


export default UserReducers