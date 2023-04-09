const initialState = {
    data: [],
    isError: null,
    isLoading: false,
    isSuccess: true
}


 const RegisterReducers = (state = initialState, action) => {
    switch(action.type){
        case "REGISTER_REQUEST" : 
        return {
            ...state,
            data: [],
            isError: null,
            isLoading: true,
            isSuccess: false
        }
        case 'REGISTER_SUCCESS' :
        return {
            ...state,
            data: action.payload,
            isError: null,
            isLoading: false,
            isSuccess: true
        }
        case 'REGISTER_FAILURE' :
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


export default RegisterReducers