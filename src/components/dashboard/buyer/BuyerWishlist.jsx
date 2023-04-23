import React from "react"
import {
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaEye,
  FaTrashAlt,
} from "react-icons/fa"

const BuyerWishlist = () => {
  return (
    <div className="buyerWishListDiv w-full p-4 flex flex-col gap-2 dashcolor rounded-md mt-3">
      <div className="buyerDownloadsHeader flex flex-row justify-between p-3 ">
        <span className="allOrdersTitle font-semibold">
          My Wishlist
        </span>
        <input
          type="text"
          placeholder="Search Orders"
          className="searchOrdersInput px-2 rounded-lg focus:outline-none text-gray-700 font-semibold opacity-90"
        />
      </div>
      <hr />
      <div className="favProductsTable flex flex-col">
        <table>
          <tr>
            <td>Image</td>
            <td>Products</td>
            <td>Amount</td>
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
            <td className="flex flex-row gap-2">
              <FaEye />
              <FaTrashAlt />
            </td>
          </tr>
        </table>
        {/* footerNag=viagtion */}
        <div className="allOrderTableNaviagation flex flex-row items-center gap-1 justify-end px-5">
          <span>
            <FaArrowLeft />
          </span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>
            <FaArrowRight />
          </span>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default BuyerWishlist
