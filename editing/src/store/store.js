import { legacy_createStore, combineReducers } from "redux"
import { formReducer } from "./reducer"

export function configureStore() {
    return legacy_createStore(
        combineReducers({
            form: formReducer
        })
    )
}
