import { Button } from "@material-tailwind/react";
import React from "react";

const CartSummary = () => {
  return (
    <div className="cartSummaryDiv flex flex-col px-10 py-5">
      <h2 className="cartSummaryHeader font-bold text-xl py-5">
        Order Summary (8 items)
      </h2>
      <div className="cartSummaryDiv flex flex-col gap-5">
        <div className="cartSummaryItems flex flex-col gap-5 py-5">
          <span className="cartSummaryItem flex flex-row justify-between ">
            Original Price
            <span className="cartItemAmount font-bold">Ksh 10,098</span>
          </span>
          <span className="cartSummaryItem flex flex-row justify-between ">
            Discount
            <span className="cartItemAmount font-bold">-Ksh 780</span>
          </span>
          <span className="cartSummaryItem flex flex-row justify-between ">
            Delivery
            <span className="cartItemAmount font-bold">Free</span>
          </span>
        </div>
        <hr />
        <div className="totalAmountSpan flex flex-row justify-between py-5 font-bold text-2xl">
          <span className="totalAmountLabel">Total Price</span>
          <span className="totalAmount">Ksh 67,908</span>
        </div>
        <Button className="checkOutBtn font-normal py-3 bg-red-600">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
