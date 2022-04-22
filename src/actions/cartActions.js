import { ToastContainer, toast } from 'react-toastify';

export const addToCart = (movie, noPerson) => (dispatch, getState) => {
    const cartItem = {
      title: movie.title,
      _id: movie._id,
      price: movie.price * noPerson,
      noPerson:movie.noPerson,
      genres: movie.genres,
      actors: movie.actors,
      posterurl: movie.posterurl,
      storyline: movie.storyline,
      cinema_name: movie.cinema_name,
      imdbRating: movie.imdbRating,
      posterurl:movie.posterurl
    };
      if (cartItem.length > 5) {
      toast.error("you Can only add 2 movies");
    } else {
      if (cartItem.length < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: movie });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
        localStorage.setItem(
          "cartItems",
          JSON.stringify(getState().cartReducer.cartItems)
        );
      }
    }
  };
  
  export const deleteFromCart = (movie) => (dispatch, getState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: movie });
    const cartItems = getState().cartReducer.cartitems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  