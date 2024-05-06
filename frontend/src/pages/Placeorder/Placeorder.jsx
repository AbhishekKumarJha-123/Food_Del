import React, { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../components/StoreContext/StoreContext";
const Placeorder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivey Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="text" placeholder="Email Adress" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text " placeholder="Phone" />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total </p>
              <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
            <button >Proceed to Payment</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Placeorder;
