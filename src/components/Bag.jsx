import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const Bag = () => {
  return (
    <>
    <main className='container p-md-3 mt-5 shadow-lg bg-light rounded'>
        <h2>Your Order</h2>
        <hr />
        <div className='d-flex justify-content-between gap-5'>
        <h5 className='text-danger'>Double Beef Burger </h5>
        <h5 className='text-secondary'><RiDeleteBin6Line /> 10500.0</h5>
        </div>
        <hr />
        <div className='d-flex justify-content-between gap-5'>
        <h5>items SubTotal</h5>
        <h5>N Subtotal</h5>
        </div>
        <hr />
        <button className="btn btn-success w-100">Proceed to Checkout</button>
    </main>
    </>
  )
}

export default Bag