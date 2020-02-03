import React,{Fragment,useContext} from 'react'
import {Link} from 'react-router-dom'
import {ProductContext} from '../../context/ProductContext'
import {CLEAR_CART} from '../../context/types'

const CartTotals = () => {
    const {cartTotal,cartSubTotal,cartTax,dispatch} = useContext(ProductContext)
    return (
        <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button 
                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        type="button"
                        onClick={()=>dispatch({
                            type:CLEAR_CART
                        })}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">
                            subtotal: 
                        </span>
                        <strong>${cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            tax: 
                        </span>
                        <strong>${cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            total: 
                        </span>
                        <strong>${cartTotal}</strong>
                    </h5>
                    {/* <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/> */}
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default CartTotals
