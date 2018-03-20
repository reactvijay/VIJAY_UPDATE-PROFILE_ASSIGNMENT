import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS } from "../actionTypes/products";

export default (
  prevState = { products: [], isLoggedIn: true, isLoading: false },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...prevState,
        isLoading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...prevState,
        isLoading: false,
        products: action.products
      };
    default:
      return prevState;
  }
};
