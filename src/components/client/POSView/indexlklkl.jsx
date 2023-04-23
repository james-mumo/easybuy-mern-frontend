import React from "react"
import logo from "../../../assets/vite.svg"
import POSProductCard from "../../global/POSProductCard"
import productsData from "../../../data/productsData"
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices"
import { IconButton } from "@material-tailwind/react"

const index = () => {
  return (
    <div className="posViewDiv w-full h-screen">
      {/* navabar */}

      <div className="border">
        <div className="navbar sticky top-0 flex flex-row justify-between px-10 py-3">
          <div className="logo text-2xl flex flex-row gap-1 cursor-pointer h-8 justify-center align-middle font-mono font-bold hover:border-dashed">
            <img src={logo} alt="logo" />
            <span>EasyBuy</span>
          </div>

          <div className="rightPosViewDiv">
            <IconButton>
              <ImportantDevicesIcon /> Website
            </IconButton>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="posMainDiv w-full flex flex-row gap-2">
        <div className="productsViewLeftDiv w-4/6 border bg-green-900 flex-col flex justify-center items-center gap-3">
          <div className="filterBar w-full border-b flex flex-row  justify-between p-2">
            <input
              type="text"
              placeholder="Search by Products Name"
              className=" px-3 rounded-lg w-3/6"
            />
            <span className="bg-gray-900 p-1">Dropdwon(All Ctegories)</span>
            <span className="bg-gray-900 p-1">Dropdwon(All Brands)</span>
          </div>
          <div className="posProductsViewItems h-screen border overflow-y-auto grid grid-cols-4 gap-5 py-2">
            {productsData.map((item, i) => (
              <>
                <POSProductCard key={i} {...item} />
              </>
            ))}
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="easyCheckOutViewRightDiv h-[85vh] w-2/6 border bg-green-900 sticky top-16">
          <div className="posCheckOutHeaderDiv w-full flex flex-row justify-between px-3 py-2 bg-slate-900">
            <span>sortyByDropDown(price, amount)</span>
            <span className="websiteIcon">Logo</span>
          </div>
          <div className="posCartItems flex flex-col">
            {/* slider */}
            <div className="posCartItem flex flex-row justify-between p-3 gap-3 border-b items-center">
              <span className="imgAndDesc flex flex-row gap-3 items-center">
                <img src="" alt="" className="posCartItemImg h-9 w-9" />
                <span className="itemName">Nikey Float Shoes</span>
              </span>
              <span className="cartActions flex flex-row gap-3 items-center">
                <span className="add">-</span>
                <span className="itemNumber">08</span>
                <span className="add">+</span>

                <span className="flex flex-row gap-3 items-center">
                  <span className="itemPrice">Ksh 5,500</span>
                  <span className="itemAction p-[2px] bg-red-600">Del</span>
                </span>
              </span>
            </div>
            {/*  */}
            <div className="posCartItem flex flex-row justify-between p-3 gap-3 border-b items-center">
              <span className="imgAndDesc flex flex-row gap-3 items-center">
                <img src="" alt="" className="posCartItemImg h-9 w-9" />
                <span className="itemName">Nikey Float Shoes</span>
              </span>
              <span className="cartActions flex flex-row gap-3 items-center">
                <span className="add">-</span>
                <span className="itemNumber">08</span>
                <span className="add">+</span>

                <span className="flex flex-row gap-3 items-center">
                  <span className="itemPrice">Ksh 5,500</span>
                  <span className="itemAction p-[2px] bg-red-600">Del</span>
                </span>
              </span>
            </div>
            {/*  */}
          </div>
          <div className="posCheckOutDiv absolute bottom-0 w-full bg-red-900 p-3 flex flex-col gap-5">
            <div className="posChekOutOptions">
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
            <div className="posCheckOutFooter flex flex-row justify-between">
              <div className="shippingAndDiscountDropDown flex flex-row gap-1">
                <span className="border p-3">Shipping Dropdwon</span>
                <span className="border p-3">Discount Dropdwon</span>
              </div>
              <div className="posPurchaseButton bg-slate-600 p-3 rounded-md">
                Purchase
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
