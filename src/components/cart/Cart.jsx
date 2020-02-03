import React, { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";
import Title from "../elements/Title";
import EmptyCard from "./EmptyCard";
import CardColumns from "./CardColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  const { cart } = useContext(ProductContext);
  return cart.length > 0 ? (
    <section>
      Cart {cart.length}
      <Title name="your" title="cart" />
      <CardColumns />
      <CartList />
      <CartTotals />
    </section>
  ) : (
    <EmptyCard />
  );
};

export default Cart;
