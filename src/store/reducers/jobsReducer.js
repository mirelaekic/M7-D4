import { GET_JOBS, JOBS_ERROR, LOADING_JOBS } from "../types"

const initialState = {
  jobs:[],
  loading:false,
  error:null
}

export default function (state = initialState, action) {
    switch (action.type) {
      case LOADING_JOBS:
        return {
          ...state,
          loading:true,
        }
      case GET_JOBS:
        return {
          ...state,
          jobs: action.payload,
          loading:false,
        }
      case JOBS_ERROR:
        return {
          ...state,
          error: "There are no results for this search",
          loading:false
        }
      default:
        return state
    }
  }