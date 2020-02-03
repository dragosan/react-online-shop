import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { ButtonContainer } from "../elements/ButtonContainer";
import { GET_PRODUCT, ADD_TO_CART, GET_TOTALS } from "../../context/types";

const ProductDetails = props => {
  const { dispatch, product } = useContext(ProductContext);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch({
      type: GET_PRODUCT,
      payload: id
    });
  }, [id]);

  return (
    <div className="row">
      <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
        <h1>{product && product.title}</h1>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <img
            src={`/${product && product.img}`}
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model: {product && product.title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by :{" "}
            <span className="text-uppercase">{product && product.company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price: <span>$</span> {product && product.price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product:
          </p>
          <p className="text-muted lead">{product && product.info}</p>
          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cart
              disabled={product && product.inCart ? true : false}
              onClick={() => {
                product.inCart = true;
                product.count += 1;
                product.total = product.price;

                dispatch({
                  type: ADD_TO_CART,
                  payload: product && product
                });
                dispatch({
                  type: GET_TOTALS
                });
              }}
            >
              {product && product.inCart ? "inCart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
