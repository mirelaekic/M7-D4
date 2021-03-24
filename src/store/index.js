import {createStore, applyMiddleware,compose, combineReducers} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import jobsReducer from "./reducers/jobsReducer"

const RootReducer = combineReducers({
    jobs: jobsReducer
})

const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
export default store;