import React from "react";
import {
  FaEdit,
  FaEye,
  FaShoppingCart,
  FaTrash,
  FaTrashAlt,
} from "react-icons/fa";
import SideNav from "../../common/SideNav";

const BuyerAccount = () => {
  return (
    <div className="adminPage flex flex-row  justify-between">
      <div className=" adminSideNav sticky top-20 border flex justify-center h-[80vh] w-[15vw]">
        <SideNav />
      </div>
      {/*  */}
      <div className="adminMain w-[85vw] float-right right-0 margin-auto bg-orange-800 flex flex-col items-center">
        <div className="buyerDashboardCards grid grid-cols-4 gap-5 p-2 w-full">
          {/*  */}
          <div className="dashboardCard bg-green-500 flex flex-row p-3 h-32 w-80 justify-center items-center gap-4 rounded-md">
            <div className="cardIcon ">
              <FaShoppingCart className="text-[44px]" />
            </div>
            <div className="cardInfo flex flex-col">
              <div className="cardInfoAmount flex gap-1 items-center">
                <span className="p-1 bg-green-800 rounded-lg">14</span>
                <span className="font-bold">Products</span>
              </div>
              <div className="cardItemTitle">In you cart</div>
            </div>
          </div>
          {/*  */}
          <div className="dashboardCard bg-green-500 flex flex-row p-3 h-32 w-80 justify-center items-center gap-4 rounded-md">
            <div className="cardIcon ">
              <FaShoppingCart className="text-[44px]" />
            </div>
            <div className="cardInfo flex flex-col">
              <div className="cardInfoAmount flex gap-1 items-center">
                <span className="p-1 bg-green-800 rounded-lg">14</span>
                <span className="font-bold">Products</span>
              </div>
              <div className="cardItemTitle">In you cart</div>
            </div>
          </div>
          {/*  */}{" "}
          <div className="dashboardCard bg-green-500 flex flex-row p-3 h-32 w-80 justify-center items-center gap-4 rounded-md">
            <div className="cardIcon ">
              <FaShoppingCart className="text-[44px]" />
            </div>
            <div className="cardInfo flex flex-col">
              <div className="cardInfoAmount flex gap-1 items-center">
                <span className="p-1 bg-green-800 rounded-lg">14</span>
                <span className="font-bold">Products</span>
              </div>
              <div className="cardItemTitle">In you cart</div>
            </div>
          </div>
          {/*  */}{" "}
          <div className="dashboardCard bg-green-500 flex flex-row p-3 h-32 w-80 justify-center items-center gap-4 rounded-md">
            <div className="cardIcon ">
              <FaShoppingCart className="text-[44px]" />
            </div>
            <div className="cardInfo flex flex-col">
              <div className="cardInfoAmount flex gap-1 items-center">
                <span className="p-1 bg-green-800 rounded-lg">14</span>
                <span className="font-bold">Products</span>
              </div>
              <div className="cardItemTitle">In you cart</div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* shipping and delivery cards */}
        <div className="shippingAndDeliveryCards grid grid-cols-2 gap-5 p-2 border w-full">
          {/*  */}
          <div className="shippingAndDeliveryCard bg-gray-500 flex flex-col rounded-md text-[14px] px-5 py-3">
            <div className="shippingAndDeliveryCardHeader flex flex-row justify-between ">
              <span className="font-semibold text-[16px] text-green-300">
                Default Shipping Adress
              </span>
              <span>
                <FaEdit className="text-[22px] text-green-500" />
              </span>
            </div>
            <div className="shippingAndDeliveryCardBody flex flex-col gap-2 p-1">
              <span className="item flex flex-row gap-2">
                <span className="opacity-80">Address</span>
                <span className="font-bold">150 House, Garrissa Road</span>
              </span>
              <span className="item flex flex-row gap-2">
                <span className="opacity-80">Postal Code</span>
                <span className="font-bold">1200</span>
              </span>
              <span className="item flex flex-row gap-2">
                <span className="opacity-80">City</span>
                <span className="font-bold">Nairobi</span>
              </span>
              <span className="item flex flex-row gap-2">
                <span className="opacity-80">Country</span>
                <span className="font-bold">Kenya</span>
              </span>
              <span className="item flex flex-row gap-2">
                <span className="opacity-80">Phone</span>
                <span className="font-bold">07435677654</span>
              </span>
            </div>
          </div>
          {/* second card */}
          <div className="shippingAndDeliveryCard bg-gray-500 flex flex-col px-5 py-3 rounded-md text-[14px]">
            <div className="shippingAndDeliveryCardHeader flex flex-row justify-between ">
              <span className="font-semibold text-[16px] text-green-300">
                Recent Products Delivery
              </span>
              <span>
                <FaEye className="text-[22px] text-green-500" />
              </span>
            </div>
            <div className="shippingAndDeliveryCardBody flex flex-col ">
              <div className="deliveryCardBodySubheaders flex justify-between border-b py-1 font-semibold px-4">
                <span className="orderID">Order ID</span>
                <span className="statures">Statures</span>
              </div>
              <div className="deliveryCardBodyItems flex flex-col gap-1 p-1">
                <div className="item flex flex-row justify-between px-2">
                  <span className="orderID font-semibold underline cursor-pointer">
                    #6786
                  </span>
                  <span className="statures bg-green-800 p-1 rounded-md">
                    Delivered
                  </span>
                </div>
                <div className="item flex flex-row justify-between px-2">
                  <span className="orderID font-semibold underline cursor-pointer">
                    #6786
                  </span>
                  <span className="statures bg-yellow-800 p-1 rounded-md">
                    Pending
                  </span>
                </div>
                <div className="item flex flex-row justify-between px-2">
                  <span className="orderID font-semibold underline cursor-pointer">
                    #6786
                  </span>
                  <span className="statures bg-red-800 p-1 rounded-md">
                    Cancelled
                  </span>
                </div>
                <div className="item flex flex-row justify-between px-2">
                  <span className="orderID font-semibold underline cursor-pointer">
                    #6786
                  </span>
                  <span className="statures bg-green-800 p-1 rounded-md">
                    Delivered
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
        {/* favoratie products */}
        <div className="favouriteOrLikedProducts w-full flex flex-col">
          <span className="divHeader">
            Your Favorite Products(liked/Loved Products)
          </span>
          <div className="favProductsTable flex flex-col">
            <table>
              <tr>
                <td>Image</td>
                <td>Products</td>
                <td>Price</td>
                <td>Review</td>
                <td>Button</td>
                <td>Options</td>
              </tr>
              <tr>
                <td>
                  <img src="./images/img/Hoodlum.png" alt="img" />
                </td>
                <td>Shoes</td>
                <td>Ksh 1200</td>
                <td>6Starst</td>
                <td>Add To Cart</td>
                <td>
                  <FaTrashAlt />
                </td>
              </tr>
            </table>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default BuyerAccount;
