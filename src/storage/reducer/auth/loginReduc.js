const initialState = {
    data: null,
    isError: null,
    isLoading: false,
    isSuccess: true
}


 const LoginReducers = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN_REQUEST" : 
        return {
            ...state,
            data: null,
            isError: null,
            isLoading: true,
            isSuccess: false
        }
        case 'LOGIN_SUCCESS' :
        return {
            ...state,
            data: action.payload,
            isError: null,
            isLoading: false,
            isSuccess: true
        }
        case 'LOGIN_FAILURE' :
        return {
            ...state,
            data: null,
            isError: action.payload,
            isLoading: false,
            isSuccess: false
        }
        case 'DELETE_TOKEN' :
            return {
            data: null,
            isError: false,
            isLoading: false,
            isSuccess: true
            }
        default:
            return state
    }
}


export default LoginReducers