export default function (state = {favourites:[]}, action) {
    switch(action.type) {
        case "ADD_TO_FAVOURITES":
            return {
                favourites:  [...state.favourites,action.payload]
            };
        case "REMOVE_FROM_FAVOURITES":
            return {
                ...state.favourites,
                favourites: state.favourites.job.filter(
                    ({id}) => id !== action.playload.id
                    )
            };

            default:
                return state
    }
}