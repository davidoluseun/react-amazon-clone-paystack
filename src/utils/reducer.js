export const initialState = {
  cart: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      const cart = [...state.cart];
      const index = cart.findIndex((item) => item.id === action.id);

      if (index >= 0) cart.splice(index, 1);

      return {
        ...state,
        cart,
      };

    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return initialState;
  }
};
