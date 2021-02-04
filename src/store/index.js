import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import favouritesReducer from '../reducers/favourites'
import jobsReducer from '../reducers/jobsReducer'
import thunk from 'redux-thunk'

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
    favourites:[],
    jobSearchResults:[],
}

const bigReducer = combineReducers({ favourites: favouritesReducer, jobSearchResults: jobsReducer })

export default function configStore() {
    return createStore(bigReducer, initialState, composedEnhancer(applyMiddleware(thunk)))
  }