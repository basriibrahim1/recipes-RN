const initialState = {
    data: [],
    isError: null,
    isLoading: false,
    isSuccess: true
}


 const DeleteRecipeReducers = (state = initialState, action) => {
    switch(action.type){
        case "DELETE_RECIPES_REQUEST" : 
        return {
            ...state,
            data: [],
            isError: null,
            isLoading: true,
            isSuccess: false
        }
        case 'DELETE_RECIPES_SUCCESS' :
        return {
            ...state,
            data: action.payload,
            isError: null,
            isLoading: false,
            isSuccess: true
        }
        case 'DELETE_RECIPES_FAILURE' :
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


export default DeleteRecipeReducers