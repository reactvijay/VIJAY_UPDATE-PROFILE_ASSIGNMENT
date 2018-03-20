import {
  GET_PRODUCTS,
  ADD_TO_CART,
  SEARCH,
  GET_PRODUCTS_SUCCESS
} from "../actionTypes/products";

export function getProducts() {
  return {
    type: GET_PRODUCTS
  };
}

export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  };
}

export function getProductsFailure(error) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    error
  };
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product
  };
}

export function search(searchTerm) {
  return { type: SEARCH, searchTerm };
}
