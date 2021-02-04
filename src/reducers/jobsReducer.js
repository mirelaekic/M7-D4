export default function (state = [], action) {
    switch (action.type) {
      case 'FETCHED_JOBS':
        return {
          ...state,
          jobs: action.payload,
        }
  
      default:
        return state
    }
  }