import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import rootReducers from "./reducer/mainReduc"

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2
}

const reducerPersist = persistReducer(persistConfig, rootReducers)

const logger = createLogger({})

export default () => {
    const store = createStore(reducerPersist, applyMiddleware(logger,thunk))
    const persistor = persistStore(store)
    return {
        store,
        persistor
    }
}