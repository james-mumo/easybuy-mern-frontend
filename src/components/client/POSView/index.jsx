import React from "react"
import logo from "../../../assets/vite.svg"
import POSProductCard from "../../global/cards/POSProductCard"
import productsData from "../../../data/productsData"
import ManageSearchIcon from "@mui/icons-material/ManageSearch"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"
import { Button, IconButton } from "@material-tailwind/react"
import ProductsFilterBar from "../../global/ProductsFilterBar"

const index = () => {
  return (
    <div class="flex w-full flex-row h-screen overflow-hidden gap-2">
      {/*  */}
      {/* posProductsViewItems overflow-scroll grid grid-cols-4 gap-5 py-2 */}
      <div className="mainp flex darkBlue  w-4/6 flex-col">
        <ProductsFilterBar />

        <main class=" darkPurple overflow-y-auto posProductsViewItems overflow-scroll grid grid-cols-4 gap-4 py-4 px-2">
          {productsData.map((item, i) => (
            <>
              <POSProductCard key={i} {...item} />
            </>
          ))}
          {/* {innerText} */}
        </main>
      </div>
      {/*  */}
      <div class="easyCheckOutViewRightDiv overflow-y-auto relative flex-1">
        <div className="posCheckOutHeaderDiv z-10 sticky top-0 darkBlue w-full flex border border-b-1 rounded-b-md border-gray-700 flex-row justify-between p-3 border-t-0">
          <span className="filterBarSpan flex flex-col justify-center items-center">
            <select
              className="appearance-none outline-0 w-full px-2 bg-inherit transition "
              name="#"
              id="#">
              <option value="#">Sort By</option>
              <option value="2">Price</option>
              <option value="3">Amount(Items)</option>
            </select>
          </span>
          <Button className="websiteIcon py-0">Clear Cart</Button>
        </div>

        <div className="posCartItems normalbg flex flex-col gap-1 border border-t-0 border-l-gray-700 border-r-0">
          {/* slider */}
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />

          {/*  */}
        </div>
        <div className="posCheckOutDiv w-full sticky bottom-0 bg-teal-900 p-3 flex-1 flex flex-col gap-1 ">
          <div className="posChekOutOptions flex-1 opacity-90">
            <div className="posCheckOutOption flex flex-row justify-between px-3 font-semibold">
              <span>SubTotal</span>
              <span>Ksh 2,500</span>
            </div>
            <div className="posCheckOutOption flex flex-row justify-between px-3 font-semibold">
              <span>Tax</span>
              <span>0</span>
            </div>
            <div className="posCheckOutOption flex flex-row justify-between px-3 font-semibold">
              <span>Shiipping Cost</span>
              <span>0</span>
            </div>
            <div className="posCheckOutOption flex flex-row justify-between px-3 font-semibold text-2xl">
              <span className="font-bold">Total</span>
              <span>Ksh 2,500</span>
            </div>
          </div>
          <div className="posCheckOutFooter flex flex-row justify-between gap-3 items-center mt-2 mb-2">
            <div className="shippingAndDiscountDropDown flex flex-row gap-1 h-8 justify-center items-center">
              <span className="border rounded-md py-1 normalbg border-gray-700 opacity-90 font-semibold px-1 flex flex-col justify-center items-center ">
                Shipping Dropdown
              </span>
              <span className="border rounded-md py-1 normalbg border-gray-700 opacity-90 font-semibold px-1 flex flex-col justify-center items-center ">
                Discount Dropdown
              </span>
            </div>
            <Button className="flex-1 p-2 rounded-md font-semibold text-lg">
              Purchase
            </Button>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  )
}

const CartItem = () => {
  return (
    <div className="posCartItem flex flex-row justify-between p-3 gap-3 border-b items-center">
      <span className="imgAndDesc flex flex-row gap-3 items-center">
        <img
          src="https://res.cloudinary.com/djv535hkn/image/upload/v1682278942/easybuy/boxess_tipbzg.webp"
          alt=""
          className="posCartItemImg h-9 w-9 border border-gray-700 rounded-md"
        />
        <span className="itemName font-semibold opacity-95">
          Nikey Float Shoes
        </span>
      </span>
      <span className="cartActions flex flex-row gap-1 items-center">
        <span className="add cursor-pointer px-1 w-fit h-8 flex flex-col justify-center items-center text-[28px] rounded-md border-0 border-gray-700 opacity-80 font-bold">
          -
        </span>
        <span className="itemNumber rounded-md border w-8 h-8 justify-center items-center flex flex-col font-bold text-xl opacity-90">
          8
        </span>
        <span className="add cursor-pointer px-1 w-fit h-8 flex flex-col justify-center items-center text-[28px] rounded-md border-0 border-gray-700 opacity-80 font-bold">
          +
        </span>

        <span className="flex flex-row gap-3 items-center pl-4 pr-2">
          <span className="itemPrice opacity-80 text-xl font-semibold">
            Ksh 5,500
          </span>
          <span className="itemAction p-[2px] bg-red-600 hover:bg-red-700 cursor-pointer rounded-md px-2">
            Delete
          </span>
        </span>
      </span>
    </div>
  )
}

export default index
