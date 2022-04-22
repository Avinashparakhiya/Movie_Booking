import axios from "axios";


export const getAllMovies = () => async (dispatch) => {
  dispatch({ type: "GET_MOVIES_REQUEST" });
  try {
    const response = await axios.get("http://localhost:3000/movie/movielist");
    // console.log(response.data);
    dispatch({ type: "GET_MOVIES_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_MOVIES_FAIL", payload: err });
  }
};