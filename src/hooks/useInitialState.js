import React, { useState} from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setstate] = useState(initialState);

  const addToCart = (payload) => {
    setstate({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (payload) => {
    setstate({
      ...state,
      cart: state.cart.filter(items=> items.id !== payload.id)
    });
  };
  return {
    state,
    addToCart,
    removeFromCart
  };
};

export default useInitialState
