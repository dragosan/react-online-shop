import React, { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";
import CartItem from "./CartItem";

const CartList = () => {
  const { cart } = useContext(ProductContext);
  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CartList;
