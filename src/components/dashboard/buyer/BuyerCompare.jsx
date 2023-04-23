import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaEye,
  FaPlayCircle,
  FaTrashAlt,
} from "react-icons/fa";

const BuyerCompare = () => {
  return (
    <div className="productsCompareDiv w-full p-4 flex flex-col gap-2 dashcolor rounded-md mt-3">
      <div className="productsCompareHeader flex flex-row justify-between py-3">
        <span className="productsCompareTitle font-semibold">
          Compare Products
        </span>
        <input
          type="text"
          placeholder="Search Product To Compare"
          className="searchRequestInput px-2 rounded-lg opacity-90 font-semibold text-gray-700"
        />
      </div>
      <hr />
      <div className="productsCompareView flex flex-row border mt-2">
        <div className="productInfoSidebar w-1/5 relative gap-4 justify-evenly border flex flex-col h-[70vh] items-center">
          <div className="compareButton h-2/5 w-full flex flex-col border justify-center items-center">
            <FaPlayCircle />
            <span>Compare Products</span>
          </div>
          <span>Product Title</span>
          <span>Products Price</span>
          <span>Ratings</span>
          <span>Product Likes</span>
          <span>Product Specifications</span>
        </div>
        <div className="comparedProductSlideBar w-4/6 flex flex-row">
          <div className="singleProductToCompare">Shoe</div>
          <div className="singleProductToCompare">Shoe</div>
        </div>
      </div>
    </div>
  )
};

export default BuyerCompare;
