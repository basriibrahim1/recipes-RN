import { combineReducers } from "redux";
import LoginReducers from "./auth/loginReduc";
import RecipeReducers from "./recipes/recipesReduc";
import EditRecipeReducers from "./recipes/editRecipesReduc";
import InsertReducers from "./recipes/insertRecipesReduc";
import DeleteRecipeReducers from "./recipes/deleteRecipesReduc";
import MyRecipeReducers from "./recipes/myRecipeReduc";
import RegisterReducers from "./auth/registerReduc";
import UserReducers from "./profile/userReduc";
import IdRecipesReducers from "./recipes/idRecipesReduc";

const rootReducers = combineReducers({
    login: LoginReducers,
    register: RegisterReducers,

    user: UserReducers,

    recipes: RecipeReducers,
    idRecipes: IdRecipesReducers,
    editRecipes: EditRecipeReducers,
    insertRecipes: InsertReducers,
    deleteRecipes: DeleteRecipeReducers,
    myRecipes: MyRecipeReducers,

})

export default rootReducers