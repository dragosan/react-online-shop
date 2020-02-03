import React, { createContext, useReducer } from "react";

import { storeProducts } from "../data";
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  RESET_PRODUCT,
  RESET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  OPEN_MODAL,
  CLOSE_MODAL,
  INCREMENT,
  DECREMENT,
  CLEAR_CART,
  GET_TOTALS
} from "./types";

const initState = {
  products: [],
  product: null,
  cart: [],
  cartTotal: 0,
  cartSubTotal: 0,
  cartTax: 0,
  modalOpen: false,
  modalProduct: null
};

export const ProductContext = createContext();

const productReducer = (state, action) => {
  const { type, payload } = action;
  let updatedCart = [...state.cart];
  let indexItem = 0;
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload };
    case GET_PRODUCT:
      return {
        ...state,
        product: storeProducts.find(item => item.id == payload)
      };
    case OPEN_MODAL:
      return { ...state, modalOpen: true, modalProduct: payload };
    case CLOSE_MODAL:
      return { ...state, modalOpen: false, modalProduct: null };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload)
      };
    case CLEAR_CART:
      const resetProducts = state.products.forEach(item => {
        item.count = 0;
        item.total = 0;
        item.inCart = false;
      });
      return { ...state, products: resetProducts, cart: [] };
    // case RESET_PRODUCTS:
    //   let resetProducts = storeProducts.map(item => {
    //     item.inCart = false;
    //     item.count = 0;
    //   });
    //   return { ...state, products: resetProducts };
    case GET_TOTALS:
      let subTotal = 0;
      state.cart.map(item => (subTotal += item.total * item.count));
      let tempTax = subTotal * 0.14;
      let tax = parseFloat(tempTax.toFixed(2));
      let total = subTotal + tax;
      console.log(total);
      return {
        ...state,
        cartTotal: total,
        cartSubTotal: subTotal,
        cartTax: tax
      };
    case INCREMENT:
      indexItem = updatedCart.indexOf(payload);
      if (updatedCart[indexItem].count < 10) {
        updatedCart[indexItem].count += 1;
      }
      return { ...state, cart: updatedCart };
    case DECREMENT:
      indexItem = updatedCart.indexOf(payload);
      if (updatedCart[indexItem].count > 1) {
        updatedCart[indexItem].count -= 1;
      }
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};
const ProductProvider = props => {
  const [state, dispatch] = useReducer(productReducer, initState);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
