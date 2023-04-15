const initialState = {
    data: null,
    isError: null,
    isLoading: false,
    isSuccess: true
}


 const MyRecipeReducers = (state = initialState, action) => {
    switch(action.type){
        case "MY_RECIPES_REQUEST" : 
        return {
            ...state,
            data: null,
            isError: null,
            isLoading: true,
            isSuccess: false
        }
        case 'MY_RECIPES_SUCCESS' :
        return {
            ...state,
            data: action.payload,
            isError: null,
            isLoading: false,
            isSuccess: true
        }
        case 'MY_RECIPES_FAILURE' :
        return {
            ...state,
            data: null,
            isError: action.payload,
            isLoading: false,
            isSuccess: false
        }
        default:
            return state
    }
}


export default MyRecipeReducers