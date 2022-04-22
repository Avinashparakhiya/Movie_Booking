export const getAllMovieReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
      case "GET_MOVIES_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "GET_MOVIES_SUCCESS":
        return {
          movies: action.payload,
          loading: false,
        };
      case "GET_MOVIES_FAIL":
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };