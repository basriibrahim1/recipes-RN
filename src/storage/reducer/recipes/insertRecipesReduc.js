const initialState = {
    data: [],
    isError: null,
    isLoading: false,
    isSuccess: true
}


 const InsertReducers = (state = initialState, action) => {
    switch(action.type){
        case "INSERT_RECIPES_REQUEST" : 
        return {
            ...state,
            data: [],
            isError: null,
            isLoading: true,
            isSuccess: false
        }
        case 'INSERT_RECIPES_SUCCESS' :
        return {
            ...state,
            data: action.payload,
            isError: null,
            isLoading: false,
            isSuccess: true
        }
        case 'INSERT_RECIPES_FAILURE' :
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


export default InsertReducers