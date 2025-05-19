export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
  const itemExists = state.cart.find((item) => item.id === action.payload.id);

  if (itemExists) {
    return state; // Don't increment stock or buyQuantity, just prevent duplicates
  } else {
    return {
      ...state,
      cart: [
        ...state.cart,
        {
          ...action.payload,
          buyQuantity: 1, // start with 1 as default user-selected quantity
        },
      ],
    };
  }


case "UPDATE_CART_QUANTITY":
  return {
    ...state,
    cart: state.cart.map((item) =>
      item.id === action.payload.id
        ? {
            ...item,
            buyQuantity:
              action.payload.quantity <= item.quantity
                ? action.payload.quantity
                : item.quantity,
          }
        : item
    ),
  };



    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
