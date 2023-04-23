import { Button } from "@material-tailwind/react"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded"
import {
  FaCreditCard,
  FaEdit,
  FaLocationArrow,
  FaPlusCircle,
  FaShoppingCart,
  FaShuttleVan,
  FaTicketAlt,
} from "react-icons/fa"
import { Link } from "react-router-dom"
import cartContext from "../../../context/cart/cartContext"
import CartItemCard from "./CartItemCard"
import CartSummary from "./CartSummary"
import axios from "axios"
import apiList from "../../../lib/apiList"

const Cart = () => {
  const navigate = useNavigate()

  const [viewAddress, setViewAddress] = useState(false)
  const [cartTotal, setCartTotal] = useState(0)
  const [viewPayment, setViewPayment] = useState(false)
  const [viewCart, setViewCart] = useState(true)
  const [confirmOrderPopup, setConfirmOrderPopup] = useState(false)

  const { cartItems, clearCart } = useContext(cartContext)
  const cartQuantity = cartItems.length

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null

  console.log(userInfo)

  const sendOrder = async () => {
    console.log(cartItems)
    clearCart()
    try {
      const { data } = await axios.post(apiList.addOrder, {
        userId: userInfo?._id,
        total: cartTotal,
        quantity: cartQuantity,
        products: cartItems,
        username: userInfo?.username,
        email: userInfo?.email,
        phone: userInfo?.phone,
        address: userInfo?.address,
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const calcCartTotal = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)

    const roundedCartTotal = Math.floor(calcCartTotal * 100) / 100
    setCartTotal(roundedCartTotal)
    console.log(roundedCartTotal) // Output the rounded total to the console
  }, [cartItems])

  return (
    <div className="cartContainer flex flex-col gap-5 p-3">
      {/* Cart Items Div */}

      <div className="cartItemsDiv flex flex-col items-center px-10 w-full gap-3 border-red-500 h-[80vh]">
        {/* this should be a slider later */}
        {viewCart && (
          <div className="cartItemsDivBody overflow-y-scroll flex flex-row w-full ">
            <div className="cartItemsScroll w-full normalbg px-3 overflow-y-scroll">
              <div className="cartItemHeader font-semibold opacity-95 text-lg flex flex-row w-full justify-between p-2 border-b border-gray-700 sticky top-0 z-10 normalbg">
                <span className="productsTag px-10">Cart Items</span>
                <span className="productsTag px-10">Cart Actions</span>
              </div>

              {cartQuantity === 0 ? (
                <div className="empty_cart_wrapper w-full h-[50vh] flex flex-col justify-center items-center">
                  <div className="text-red-600">
                    <LocalMallRoundedIcon className=" " />
                  </div>
                  <h2 className="opacity-90 text-3xl font-semibold">
                    Your Cart is Empty
                  </h2>
                  <Link
                    to="/products"
                    className="opacity-80 text-2xl font-semibold">
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <>
                  {cartItems.map((item, i) => (
                    <CartItemCard key={i} {...item} />
                  ))}
                </>
              )}
            </div>
            <div className="cartItemsSideDiv h-[80vh] max-w-[600px] normalbg sticky top-0 flex flex-col gap-3 bg-slate-700 px-3 w-full mt-0 ">
              <span className="summaryBodyHeader p-2 text-lg font-semibold opacity-80 flex flex-row justify-between border-b">
                <span>Products</span>
                <span>Price</span>
              </span>
              {/* cart Items map */}
              {/* slider */}
              <div className="cartItems flex flex-col gap-1 py-0 overflow-y-scroll border h-[80vh]">
                {cartItems.map((item, i) => {
                  const { name, description, quantity, price } = item
                  return (
                    <>
                      <span
                        key={i}
                        className="cartItem flex flex-row w-full p-3 gap-1 items-center border-b border-gray-700">
                        <span className="itemTitle text-md font-semibold opacity-90 w-[24%]">
                          {name}
                        </span>
                        <span className="cartItemDesc text-[15px] px-3 opacity-90 h-[30px] min-w-3/6 flex-1 overflow-y-auto">
                          {description}
                        </span>
                        <span className="bg-blue-gray-800 flex flex-row gap-1 mx-3 text-lg p-1 px-2 w-[7%] font-semibold rounded-md cursor-pointer opacity-80">
                          <span>x</span>
                          {quantity}
                        </span>
                        <span className="cartItemPrice w-[15%]  gap-1 flex flex-row justify-end text-md opacity-80 font-semibold ">
                          <span>Ksh</span>
                          {Math.floor(item.price * item.quantity * 100) / 100}
                        </span>
                      </span>
                    </>
                  )
                })}
              </div>
              {/*  */}

              {/* total price summary */}
              <div className="priceSummarySpans border bottom-10 w-full px-5 py-2 bg-teal-800 border-gray-700 gap-2 flex flex-col">
                <div className="deliveryDiv flex flex-row border-b border-gray-700 py-2 gap-1">
                  <div className="localDeliveryItem flex flex-row gap-5 items-center flex-1 ">
                    <input type="checkbox" name="" id="" />
                    <span className="homeDelliveryTag">Local Delivery</span>
                  </div>
                  <div className="localDeliveryItem flex flex-row gap-2 flex-1 items-center">
                    <input type="checkbox" name="" id="" />
                    <span className="homeDelliveryTag">Home Delivery</span>
                    <span
                      className="text-md p-1 rounded-md bg-blue-800 cursor-pointer"
                      onClick={() => setViewAddress(!viewAddress)}>
                      View Address
                    </span>
                  </div>
                </div>
                <span className="couponInput flex flex-row justify-between ">
                  <input
                    type="text"
                    placeholder="Enter coupon code here"
                    className="rounded-md px-2 focus:ring-0 focus:outline-none bg-gray-800 opacity-80 font-semibold flex-[0.5] "
                  />
                  <span className="pl-6">Apply</span>
                </span>
                {/*  */}
                <span className="priceSummaryItem flex flex-row justify-between">
                  <span>Subtotal</span>
                  <span>Ksh 500</span>
                </span>
                <span className="priceSummaryItem flex flex-row justify-between">
                  <span>Tax</span>
                  <span>Ksh 0</span>
                </span>
                <span className="priceSummaryItem flex flex-row justify-between">
                  <span>Shipping Cost</span>
                  <span>Ksh 0</span>
                </span>
                <span className="priceSummaryItem flex flex-row justify-between">
                  <span>Total</span>
                  <span>Ksh {cartTotal}</span>
                </span>
                <Button onClick={sendOrder} className="opacity-9">
                  {userInfo ? "Checkout" : "Login to Complete Order"}
                </Button>
                {/* <Button onClick={() => setViewPayment(!viewPayment)}>
                  Checkout
                </Button> */}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* shinpping info div */}
      {viewAddress && (
        <>
          <div className="shippingInfoDiv flex flex-col w-full gap-4 p-5 px-10 border border-gray-700 justify-center items-center normalbg">
            <div className="shoppingInfoCards w-5/6 flex flex-row gap-4">
              <div className="shippingAndDeliveryCard flex-1 bg-gray-900 flex flex-col rounded-md text-[14px] px-5 py-3">
                <div className="shippingAndDeliveryCardHeader flex flex-row justify-between ">
                  <span className="font-semibold text-[16px] ">
                    Default Shipping Adress
                  </span>
                  <span>
                    <FaEdit className="text-[22px] text-green-500" />
                  </span>
                </div>
                <div className="shippingAndDeliveryCardBody flex flex-col gap-2 p-1">
                  <span className="item flex flex-row gap-2 p-2 rounded-md">
                    <span className="opacity-80">Address</span>
                    <span className="font-bold">150 House, Garrissa Road</span>
                  </span>
                  <span className="item flex flex-row gap-2 p-2 rounded-md">
                    <span className="opacity-80">Postal Code</span>
                    <span className="font-bold">1200</span>
                  </span>
                  <span className="item flex flex-row gap-2 p-2 rounded-md">
                    <span className="opacity-80">City</span>
                    <span className="font-bold">Nairobi</span>
                  </span>
                  <span className="item flex flex-row gap-2 p-2 rounded-md">
                    <span className="opacity-80">Country</span>
                    <span className="font-bold">Kenya</span>
                  </span>
                  <span className="item flex flex-row gap-2 p-2 rounded-md">
                    <span className="opacity-80">Phone</span>
                    <span className="font-bold">07435677654</span>
                  </span>
                </div>
              </div>
              {/* new address card */}
              <div className="addNewAddress flex-1 h-[270px] bg-gray-900 flex flex-col rounded-md text-[14px] px-5 py-3 items-center justify-center text-xl">
                <FaPlusCircle className="text-4xl" />
                <span>Add new Address</span>
                <span
                  className="continueBtn mt-10 p-2 bg-blue-900 rounded-lg"
                  onClick={
                    (() => setViewPayment(!viewPayment),
                    () => setViewAddress(!viewAddress))
                  }>
                  Continue to Payment
                </span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* payment div */}
      {viewPayment && (
        <>
          <div className="selectPaymentDiv px-5 bg-teal-800 h-[85vh] ">
            {/* <span className="paymentHeader w-full flex items-center justify-center">
              Choose Payment
            </span> */}
            <div className="flex flex-col w-full items-center justify-evenly py-5 gap-4">
              <span className="w-full mt-0 font-semibold opacity-80">
                Select Payment Method
              </span>
              <div className="flex flex-row w-full items-center justify-evenly py-0 gap-4">
                <div className="paymentMainDiv normalbg flex flex-row flex-1 items-center justify-center gap-3 border border-gray-700 p-3 rounded-md">
                  <div className="paymentCards border-gray-700 border gap-10 py-2 rounded-md grid grid-cols-4">
                    <div className="paymentCard relative border w-36 h-36 opacity-80">
                      <div className="payCardHeader absolute top-3 right-3 w-full text-right">
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="payCardImg">
                        <img
                          src="./img/Squish.png"
                          alt=""
                          className="h-36 w-36"
                        />
                      </div>
                      <div className="payCardName absolute bottom-0 bg-slate-700 w-full items-center justify-center flex flex-row">
                        bKash
                      </div>
                    </div>
                    <div className="paymentCard relative border w-36 h-36 opacity-80">
                      <div className="payCardHeader absolute top-3 right-3 w-full text-right">
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="payCardImg">
                        <img
                          src="./img/Squish.png"
                          alt=""
                          className="h-36 w-36"
                        />
                      </div>
                      <div className="payCardName absolute bottom-0 bg-slate-700 w-full items-center justify-center flex flex-row">
                        bKash
                      </div>
                    </div>
                    <div className="paymentCard relative border w-36 h-36 opacity-80">
                      <div className="payCardHeader absolute top-3 right-3 w-full text-right">
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="payCardImg">
                        <img
                          src="./img/Squish.png"
                          alt=""
                          className="h-36 w-36"
                        />
                      </div>
                      <div className="payCardName absolute bottom-0 bg-slate-700 w-full items-center justify-center flex flex-row">
                        bKash
                      </div>
                    </div>{" "}
                    <div className="paymentCard relative border w-36 h-36 opacity-80">
                      <div className="payCardHeader absolute top-3 right-3 w-full text-right">
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="payCardImg">
                        <img
                          src="./img/Squish.png"
                          alt=""
                          className="h-36 w-36"
                        />
                      </div>
                      <div className="payCardName absolute bottom-0 bg-slate-700 w-full items-center justify-center flex flex-row">
                        bKash
                      </div>
                    </div>
                    <div className="paymentCard relative border w-36 h-36 opacity-80">
                      <div className="payCardHeader absolute top-3 right-3 w-full text-right">
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="payCardImg">
                        <img
                          src="./img/Squish.png"
                          alt=""
                          className="h-36 w-36"
                        />
                      </div>
                      <div className="payCardName absolute bottom-0 bg-slate-700 w-full items-center justify-center flex flex-row">
                        bKash
                      </div>
                    </div>
                    <div className="paymentCard relative border w-36 h-36 opacity-80">
                      <div className="payCardHeader absolute top-3 right-3 w-full text-right">
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="payCardImg">
                        <img
                          src="./img/Squish.png"
                          alt=""
                          className="h-36 w-36"
                        />
                      </div>
                      <div className="payCardName absolute bottom-0 bg-slate-700 w-full items-center justify-center flex flex-row">
                        bKash
                      </div>
                    </div>
                    <div className="paymentCard relative border w-36 h-36 opacity-80">
                      <div className="payCardHeader absolute top-3 right-3 w-full text-right">
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="payCardImg">
                        <img
                          src="./img/Squish.png"
                          alt=""
                          className="h-36 w-36"
                        />
                      </div>
                      <div className="payCardName absolute bottom-0 bg-slate-700 w-full items-center justify-center flex flex-row">
                        bKash
                      </div>
                    </div>{" "}
                    <div className="paymentCard relative border w-36 h-36 opacity-80">
                      <div className="payCardHeader absolute top-3 right-3 w-full text-right">
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="payCardImg">
                        <img
                          src="./img/Squish.png"
                          alt=""
                          className="h-36 w-36"
                        />
                      </div>
                      <div className="payCardName absolute bottom-0 bg-slate-700 w-full items-center justify-center flex flex-row">
                        bKash
                      </div>
                    </div>
                    <div className="paymentCard relative border w-36 h-36 opacity-80">
                      <div className="payCardHeader absolute top-3 right-3 w-full text-right">
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="payCardImg">
                        <img
                          src="./img/Squish.png"
                          alt=""
                          className="h-36 w-36"
                        />
                      </div>
                      <div className="payCardName absolute bottom-0 bg-slate-700 w-full items-center justify-center flex flex-row">
                        bKash
                      </div>
                    </div>
                    <div className="paymentCard relative border w-36 h-36 opacity-80">
                      <div className="payCardHeader absolute top-3 right-3 w-full text-right">
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="payCardImg">
                        <img
                          src="./img/Squish.png"
                          alt=""
                          className="h-36 w-36"
                        />
                      </div>
                      <div className="payCardName absolute bottom-0 bg-slate-700 w-full items-center justify-center flex flex-row">
                        bKash
                      </div>
                    </div>
                    <div className="paymentCard relative border w-36 h-36 opacity-80">
                      <div className="payCardHeader absolute top-3 right-3 w-full text-right">
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="payCardImg">
                        <img
                          src="./img/Squish.png"
                          alt=""
                          className="h-36 w-36"
                        />
                      </div>
                      <div className="payCardName absolute bottom-0 bg-slate-700 w-full items-center justify-center flex flex-row">
                        bKash
                      </div>
                    </div>
                  </div>
                  {/*  */}

                  <div className="orderSummary border h-[70vh] flex-1 flex flex-col normalbg p-3 border-gray-700 rounded-md">
                    {/* selected card balanace */}

                    <div className="selectedCardAndBlance flex flex-row gap-3 justify-around">
                      <div className="paymentCard relative border w-36 h-36 opacity-80 mb-9">
                        <div className="payCardHeader absolute top-3 right-3 w-full text-right">
                          <input type="checkbox" checked={true} name="" id="" />
                        </div>
                        <div className="payCardImg">
                          <img
                            src="./img/Squish.png"
                            alt=""
                            className="h-36 w-36"
                          />
                        </div>
                        <div className="payCardName absolute bottom-0 bg-slate-700 w-full items-center justify-center flex flex-row">
                          bKash
                        </div>
                        <span className="bg-teal-900 p-1 font-semibold opacity-90 flex-1 flex flex-col justify-center items-center">
                          M-Pesa
                        </span>
                      </div>
                      {/*  */}

                      <div className="selectedCardBal flex flex-col">
                        <div className="selectedCardBalanceCard flex flex-col w-fit bg-amber-800 items-center justify-center px-4 py-8 border border-dashed">
                          <span className="selectedCardHeader">
                            Your Wallet Balance is <span>Ksh 50</span>
                          </span>
                          <span className="selectedCardBody bg-gray-600 p-2 rounded-md">
                            You have insufficient Balance
                          </span>
                        </div>
                        {/*  */}
                        {/* agre to policy */}
                      </div>
                      <div className="selectedCardTerms flex flex-col gap-1 opacity-80 hover:opacity-100 justify-start items-center">
                        <span className="bg-green-900 border-gray-700 p-4 rounded-lg hover:bg-green-700 ">
                          View M-Pesa Terms
                        </span>
                        <span className="flex flex-row gap-2">
                          <input type="checkbox" name="" id="" />
                          <span>I agree to terms blah and blah</span>
                        </span>
                      </div>
                    </div>
                    {/*  */}
                    {/* bootom buttons */}

                    <div className="border flex flex-col gap-1 mt-10 p-4">
                      <span className="couponInput flex flex-row justify-between ">
                        <input
                          type="text"
                          placeholder="Enter coupon code here"
                          className="rounded-md px-2 focus:ring-0 focus:outline-none bg-gray-800 opacity-80 font-semibold flex-[0.5] "
                        />
                        <span className="pl-6">Apply</span>
                      </span>
                      {/*  */}
                      <span className="priceSummaryItem flex flex-row justify-between">
                        <span>Subtotal</span>
                        <span>Ksh 500</span>
                      </span>
                      <span className="priceSummaryItem flex flex-row justify-between">
                        <span>Tax</span>
                        <span>Ksh 0</span>
                      </span>
                      <span className="priceSummaryItem flex flex-row justify-between">
                        <span>Shipping Cost</span>
                        <span>Ksh 0</span>
                      </span>
                      <span className="priceSummaryItem flex flex-row justify-between">
                        <span>Total</span>
                        <span>Ksh 4500</span>
                      </span>
                      <div className="paymentInfoButtons flex-1 dashcolor flex flex-row justify-between p-5 rounded-lg mt-3">
                        <span className="rtnToShopBtn p-2 hover:bg-blue-700 cursor-pointer bg-blue-900 rounded-lg">
                          Return To Shop
                        </span>
                        <span
                          className="continueBtn p-2  hover:bg-blue-700 cursor-pointer bg-blue-900 rounded-lg"
                          onClick={() =>
                            setConfirmOrderPopup(!confirmOrderPopup)
                          }>
                          Confirm Order
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* cart summary ends */}

      {/* consifrmation begins */}
      {confirmOrderPopup && (
        <>
          <div className="confirmationDiv w-full flex items-center justify-center bg-purple-900 py-5">
            <div className="confirmationDiv w-5/6 flex flex-col items-center justify-center gap-5">
              <span className="header">Thanks for your order</span>
              <div className="confirmationBody">
                <span className="sentToEmail">
                  Order summary has beeen sent to
                  <span className="email"> ww@gmail.com</span>
                </span>
                <span className="orderNumber">
                  Order Number: <span className="orderID">34099</span>
                </span>
              </div>
              <div className="confirmationFooter flex flex-row gap-5">
                <Button className="px-4">DashBoard</Button>
                <Button className="px-4">Check Purchase History</Button>
              </div>
            </div>
            {/*  */}
          </div>
        </>
      )}

      {/*  */}
    </div>
  )
}

export default Cart
