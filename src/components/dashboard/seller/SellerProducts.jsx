import React from "react"
import {
  FaArrowLeft,
  FaArrowRight,
  FaEdit,
  FaEye,
  FaTrashAlt,
} from "react-icons/fa"
import { Button } from "@material-tailwind/react"
import ProductStatsCard from "../../global/cards/ProductStatsCard"
import CreateProduct from "../../global/cards/CreateProduct"
import ViewProduct from "../../global/cards/ViewProduct"
import { useState } from "react"

const SellerProducts = () => {
  const [addProducts, setAddProducts] = useState(false)
  return (
    // by default the table for creating an item should not appear unless one clicks the add item button which ill add later

    // you can ignore this below

    //  all products table
    //  the view button on the table when clicked can just open the selecetd item to the left and call the create item table

    <div className="flex flex-col py-3">
      {!addProducts && (
        <div className="flex flex-row flex-1 justify-evenly gap-4">
          <ProductStatsCard />
          <ProductStatsCard />
          <ProductStatsCard />
          <ProductStatsCard />
          <ProductStatsCard />
        </div>
      )}
      {/* here we can add that simple pie chart and upgrade packge card */}

      {/*  */}

      {/*  */}
      <div className="">
        {/*  */}
        {addProducts && (
          <div className="">
            <CreateProduct click={() => setAddProducts(!addProducts)} />
          </div>
        )}

        {!addProducts && (
          <>
            {/* all products table */}
            {/* the view button on the table when clicked can just open the selecetd item to the left and call the create item table  */}
            <div className=" dashcolor mt-3 p-3 rounded-md">
              <div className="productsOptions flex flex-row w-full justify-between">
                <Button
                  onClick={() => setAddProducts(!addProducts)}
                  className="bg-[rgb(115,103,240)] hover:shadow-lg hover:shadow-blue-gray-500 cursor-pointer p-2 rounded-md">
                  Create New Product
                </Button>
                <Button className="bg-[rgb(115,103,240)] hover:shadow-lg hover:shadow-blue-gray-500 cursor-pointer p-2 rounded-md">
                  Download Products Pdf
                </Button>
              </div>
              <div className="allProductsTableHeader flex flex-row w-full justify-between">
                <span className="">All Products</span>
                <span>Dropdwon by Category/Date/Stock</span>
              </div>
              <table>
                <tr>
                  <th>id</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price & Info</th>
                  <th>Stock</th>
                  <th>Created On</th>
                  <th>Admin Status</th>
                  <th>My Status</th>
                  <th>Options</th>
                  <th>View Product</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <img src="" alt="" />
                  </td>
                  <td>Nikey Shoes</td>
                  <td>Kids</td>
                  <td className="info flex flex-col">
                    <span className="infoItem">
                      <span>Num of Sales</span>
                      <span>0 Times</span>
                    </span>
                    <span className="infoItem">
                      <span>Num of Sales</span>
                      <span>Ksh 9,800</span>
                    </span>
                    <span className="infoItem">
                      <span>Rating</span>
                      <span>0</span>
                    </span>
                  </td>
                  <td>56</td>
                  <td>09/09/2022</td>
                  <td>Approved</td>
                  <td>On Button</td>
                  <td>
                    <ViewProduct />
                  </td>
                  <td className="opts flex flex-row">
                    <FaEye /> <FaEdit /> <FaTrashAlt />
                  </td>
                </tr>
              </table>
              <div className="sellerAllProductsTableNaviagtion flex flex-row items-center gap-1 justify-end px-5">
                {/* footerNag=viagtion */}
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
          </>
        )}
        {/*  */}
      </div>
    </div>
  )
}

export default SellerProducts
