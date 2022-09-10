 export const prodReducer = (state, action) => {
    switch (action.type) {
      case "SORT_BY_RATING":
        return { ...state, byRating: action.payload};
      case "CLEAR_FILTERS":
        return{
          byRating: 0,
        }
  
      default:
        return state;
    }
  };
  