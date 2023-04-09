const initialState = {
    data: [],
    isError: null,
    isLoading: false,
    isSuccess: true
}


 const RecipeReducers = (state = initialState, action) => {
    switch(action.type){
        case "RECIPES_REQUEST" : 
        return {
            ...state,
            isError: null,
            isLoading: true,
            isSuccess: false
        }
        case 'RECIPES_SUCCESS' :
        return {
            ...state,
            data: action.payload,
            isError: null,
            isLoading: false,
            isSuccess: true
        }
        case 'RECIPES_FAILURE' :
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


export default RecipeReducers