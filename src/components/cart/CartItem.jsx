import React, { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";
import {
  INCREMENT,
  DECREMENT,
  GET_TOTALS,
  REMOVE_FROM_CART,
  RESET_PRODUCTS
} from "../../context/types";

const CartItem = ({ item }) => {
  const { img, title, price, id, total, count } = item;
  const { dispatch } = useContext(ProductContext);
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price :</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                dispatch({
                  type: DECREMENT,
                  payload: item
                });
                dispatch({
                  type: GET_TOTALS
                });
              }}
            >
              {" "}
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                dispatch({
                  type: INCREMENT,
                  payload: item
                });

                dispatch({
                  type: GET_TOTALS
                });
              }}
            >
              {" "}
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cart-icon"
          onClick={() => {
            dispatch({
              type: REMOVE_FROM_CART,
              payload: id
            });
            dispatch({
              type: GET_TOTALS
            });
            dispatch({
              type: RESET_PRODUCTS
            });
          }}
        >
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: $ {total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
