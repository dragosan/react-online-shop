import React, { Fragment, useContext, useEffect } from "react";
import Title from "../elements/Title";

import { ProductContext } from "../../context/ProductContext";
import Product from "./Product";
import { storeProducts } from "../../data";

const ProductList = () => {
  const { dispatch } = useContext(ProductContext);
  const products = storeProducts;

  // useEffect(() => {
  //   dispatch({
  //     type: "GET_PRODUCTS",
  //     payload: products
  //   });
  // }, []);

  return (
    <Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
        </div>
        <div className="row">
          {products &&
            products.length > 0 &&
            products.map(product => {
              return <Product key={product.id} product={product} />;
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
