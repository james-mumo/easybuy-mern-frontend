import React from "react"
import ProductCard from "./ProductCard"
import { Button } from "@material-tailwind/react"

const CreateProduct = ({ click }) => {
  return (
    <div className="flex flex-row flex-1 py-3 gap-3 relative h-[90vh]">
      <div className="flex-1 p-0 overflow-x-scroll">
        <div className="dashcolor p-3 rounded-md opacity-80">
          <span className=" py-3 w-full font-semibold opacity-80">
            Add New Product Information
          </span>
          <div className="basicInfoItem py-2 flex flex-row w-full justify-between ">
            <label
              style={{ opacity: "0.9" }}
              className="font-semibold, text-md"
              htmlFor="2rodName">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product title here"
              className="basicInfoInput text-blue-900 font-semibold focus:ring-0 focus:outline-none max-w-[550px]  flex-1 rounded-lg px-2 border border-black"
            />
          </div>
          <div className="basicInfoItem py-2 flex flex-row w-full justify-between ">
            <label
              style={{ opacity: "0.9" }}
              className="font-semibold, text-md"
              htmlFor="ProdName">
              Main Category
            </label>
            <input
              type="text"
              placeholder="Select Product Category"
              className="basicInfoInput text-blue-900 font-semibold text-[dashcolor] focus:ring-0 focus:outline-none  flex-1 max-w-[550px] rounded-lg px-2 border border-black"
            />
          </div>
          <div className="basicInfoItem py-2 flex flex-row w-full justify-between ">
            <label
              style={{ opacity: "0.9" }}
              className="font-semibold, text-md"
              htmlFor="ProdName">
              Sub Category
            </label>
            <input
              type="text"
              placeholder="Select product Sub Category"
              className="basicInfoInput text-blue-900 font-semibold text-[dashcolor] focus:ring-0 focus:outline-none  flex-1 max-w-[550px] rounded-lg px-2 border border-black"
            />
          </div>
          <div className="basicInfoItem py-2 flex flex-row w-full justify-between ">
            <label
              style={{ opacity: "0.9" }}
              className="font-semibold, text-md"
              htmlFor="ProdName">
              Brand
            </label>
            <input
              type="text"
              placeholder="Select Brand"
              className="basicInfoInput text-blue-900 font-semibold text-[dashcolor] focus:ring-0 focus:outline-none  flex-1 max-w-[550px] rounded-lg px-2 border border-black"
            />
          </div>
          <div className="basicInfoItem py-2 flex flex-row w-full justify-between ">
            <label
              style={{ opacity: "0.9" }}
              className="font-semibold, text-md"
              htmlFor="ProdName">
              Brand
            </label>
            <input
              type="text"
              placeholder="Select Brand"
              className="basicInfoInput text-blue-900 font-semibold text-[dashcolor] focus:ring-0 focus:outline-none  flex-1 max-w-[550px] rounded-lg px-2 border border-black"
            />
          </div>
          <div className="basicInfoItem py-2 flex flex-row w-full justify-between ">
            <label
              style={{ opacity: "0.9" }}
              className="font-semibold, text-md"
              htmlFor="ProdName">
              Minimum Purchase Qty
            </label>
            <input
              type="text"
              placeholder="Unit (Example: Kg, Pc, etc)"
              className="basicInfoInput text-blue-900 font-semibold text-[dashcolor] focus:ring-0 focus:outline-none  flex-1 max-w-[550px] rounded-lg px-2 border border-black"
            />
          </div>
          <div className="basicInfoItem py-2 flex flex-row w-full justify-between ">
            <label
              style={{ opacity: "0.9" }}
              className="font-semibold, text-md"
              htmlFor="ProdName">
              Search Tags
            </label>
            <input
              type="text"
              placeholder="Type and Hit Enter to add a tag"
              className="basicInfoInput text-blue-900 font-semibold text-[dashcolor] focus:ring-0 focus:outline-none  flex-1 max-w-[550px] rounded-lg px-2 border border-black"
            />
          </div>
          <div className="basicInfoItem py-2 flex flex-row w-full justify-between ">
            <label
              style={{ opacity: "0.9" }}
              className="font-semibold, text-md"
              htmlFor="ProdName">
              Barcode
            </label>
            <input
              type="text"
              placeholder="Enter Product Barcode"
              className="basicInfoInput text-blue-900 font-semibold text-[dashcolor] focus:ring-0 focus:outline-none  flex-1 max-w-[550px] rounded-lg px-2 border border-black"
            />
          </div>
          <div className="basicInfoItem py-2 flex flex-row w-full justify-between ">
            <label
              style={{ opacity: "0.9" }}
              className="font-semibold, text-md"
              htmlFor="ProdName">
              Refundable
            </label>
            <input
              type="radio"
              placeholder="Enter Product Barcode"
              className="basicInfoInput text-blue-900 font-semibold text-[dashcolor] focus:ring-0 focus:outline-none focus:cursor-default  flex-1 max-w-[550px] rounded-lg px-2 border border-black"
            />
          </div>
        </div>
        {/*  */}
        <div className="newProductImagesAndVideo flex flex-col justify-center items-center p-3 bg-blue-900 w-full h-60 mt-3 rounded-md">
          <span className="prodImagesAndVidHeader">Add Thumbnail </span>
          <span>➕</span>
          <div className="newProdImgs">
            <div className="thumbnailImage">images</div>
            <div className="newProdGallerImgs">images</div>
          </div>
          <div className="prodmainVideo">video</div>
        </div>
        {/*  */}
        <div className="productVariation bg-teal-800 mt-3 p-3 rounded-md">
          <span className="prodVariationHeader font-bold text-lg opacity-80 ">
            Products Variations
          </span>
          <div className="varItems flex flex-1 justify-center gap-2 opacity-90 font-semibold ">
            <div className="prodVariationItem">
              <label htmlFor="Color">
                Color <input type="radio" />
              </label>
              <input
                type="text"
                placeholder="Select Color"
                className=" text-gray-800"
              />
            </div>
            <div className="prodVariationItem">
              <label htmlFor="Attributes">
                Attributes <input type="radio" />
              </label>
              <input
                type="text"
                placeholder="Select Size, fabrice"
                className=" text-gray-800"
              />
            </div>
            <div className="prodVariationItem">
              <label htmlFor="Size">Attributes</label>
              <input
                type="text"
                placeholder="Selct S, M, L, XL, XXL"
                className=" text-gray-800"
              />
            </div>
            <div className="prodVariationItem">
              <label htmlFor="Size">Fabrice</label>
              <input
                type="text"
                placeholder="Nothing Selected"
                className=" text-gray-800"
              />
            </div>
          </div>
          <div className="prodPriceAndStock grid grid-cols-2 gap-3 mt-3 justify-evenly opacity-90 font-semibold">
            <div className="prodPriceAndStockItem flex flex-row justify-between">
              <label htmlFor="Unit Price">Unit Price</label>
              <input
                type="number"
                placeholder="0.00"
                className="flex-1 max-w-[300px] text-gray-600"
              />
            </div>
            <div className="prodPriceAndStockItem  flex flex-row justify-between">
              <label htmlFor="Discount Date Range">Discount Date Range</label>
              <input
                type="date"
                className="flex-1 max-w-[300px] text-gray-600"
              />
            </div>
            <div className="prodPriceAndStockItem  flex flex-row justify-between">
              <label htmlFor="Discount Date Range">Discount</label>
              <input
                type="number"
                className="flex-1 max-w-[300px] text-gray-600"
              />
            </div>
            <div className="prodPriceAndStockItem  flex flex-row justify-between">
              <label htmlFor="Quantity">Quantity</label>
              <input
                type="number"
                className="flex-1 max-w-[300px] text-gray-600"
              />
            </div>
          </div>
        </div>
        {/*  */}

        <div className="prodDescAndPDf bg-green-800 rounded-md mt-3 p-3 flex flex-col items-center gap-1">
          {/* add kama ile ya best website */}
          <span className="descHeader w-full text-lg p-1 px-5 font-semibold opacity-90 ">
            Enter Product Description
          </span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="w-full focus:outline-none border-2 text-gray-400 font-semibold rounded-lg flex-1 focus:border-green-400"></textarea>
          <div className="pdfDescItem w-full bg-purple-900 rounded-md px-5 py-2 flex flex-col">
            <label htmlFor="" className="opacity-90 font-bold">
              Pdf Specification
            </label>
            <span className="w-full text-center opacity-90 font-bold">
              Drag your file or Browse Files
            </span>
          </div>
        </div>
        <div className="prodSEO overflow-hidden rounded-md bg-red-800 w-full flex mt-3 flex-col items-center gap-3">
          <div className="seoHeader w-full bg-pink-800 px-5 py-2 flex flex-col">
            <span className="font-bold ">
              EazyBuy SEO <span>SEO 29/100</span>
            </span>
            <div className="seoItem w-full bg-yellow-800 px-5 py-2 flex flex-col">
              <label htmlFor="">Focus Keyword</label>
              <input type="text" placeholder="SEO Title" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="2"
                className="w-full focus:outline-none border-2 text-gray-400 font-semibold rounded-lg flex-1 focus:border-green-400"></textarea>
            </div>
          </div>
        </div>
      </div>
      {/* right div */}
      <div className="flex-[0.4] dashcolor opacity-80 sticky rounded-md p-3 w-96 flex flex-col top-9">
        <div className="shippingConfig ">
          <span className="shippingHeader opacity-80 font-bold">
            Shipping configuration
          </span>
          <div className="shippingConfigItem">
            <label htmlFor="">Free Shipping</label>
            <input type="radio" value="" />
          </div>
          <div className="shippingConfigItem">
            <label htmlFor="">Flat Rate</label>
            <input type="radio" value="" />
          </div>

          <div className="shippingConfigItem">
            <label htmlFor="">Free Shipping</label>
            <input type="text" value="0" />
          </div>
          <div className="shippingConfigItem">
            <label htmlFor="">City Wise Shipping</label>
            <input type="radio" value="" />
          </div>
          <div className="shippingConfigItem">
            <label htmlFor="">Weight-Wise Shipping</label>
            <input type="radio" value="" />
          </div>
          <div className="shippingConfigItem">
            <label htmlFor="">Shipping Class</label>
            <input type="radio" value="air, car, bike" />
          </div>
        </div>
        <div className="stockManagement">
          <span className="stockMngmtHeader">Stock Management</span>
          <div className="stockMangmtItem">
            <label htmlFor="">Low Quantity Warning</label>
            <input type="number" name="" id="" placeholder="3" />
          </div>
          <div className="stockMangmtItem">
            <label htmlFor="">Show Stock Quantity</label>
            <input type="radio" />
          </div>
          <div className="stockMangmtItem">
            <label htmlFor="">Show Stock With Text</label>
            <input type="radio" />
          </div>{" "}
          <div className="stockMangmtItem">
            <label htmlFor="">Hide Stock</label>
            <input type="radio" />
          </div>
        </div>
        <div className="productDeliveryTime">
          <div className="deliveryInfoItem">
            <label htmlFor="">Cash on delivery</label>
            <input type="radio" />
          </div>
          <div className="deliveryInfoItem">
            <span>
              <label htmlFor="">Cash on delivery</label>
              <input type="radio" />
            </span>
            <input type="number" placeholder="10" />
          </div>
        </div>
        <div className="productStatus">
          <div className="prodStatusItem">
            <label htmlFor="">Featured</label>
            <input type="radio" />
          </div>
          <div className="prodStatusItem">
            <label htmlFor="">Todays Deal</label>
            <input type="radio" />
          </div>
          <div className="prodStatusItem">
            <label htmlFor="">Flash Deal</label>
            <input type="radio" />
          </div>
          <div className="flashDiscountAndDiscountType">
            <div className="flashDiscountAndDiscountTypeItem">
              <label htmlFor="">Add To Flash</label>
              <input type="text" placeholder="Choose Title" />
            </div>
            <div className="flashDiscountAndDiscountTypeItem">
              <label htmlFor="">Discount</label>
              <input type="number" placeholder="0.00" />
            </div>
            <div className="flashDiscountAndDiscountTypeItem">
              <label htmlFor="">Discount Type</label>
              <input type="text" placeholder="Choose Type" />
            </div>
          </div>
        </div>
        <div className="vatAndTax">
          <div className="vatAndTaxItem">
            <span>
              <label htmlFor="">Products Vat & Tax</label>
              <input type="radio" />
            </span>
            <span>
              <input type="text" placeholder="00" />
              <input type="text" placeholder="Flat " />
            </span>
            <Button
              onClick={click}
              className="bg-[rgb(115,103,240)] hover:shadow-lg hover:shadow-blue-gray-500 cursor-pointer p-2 rounded-md">
              Submit Items
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct
