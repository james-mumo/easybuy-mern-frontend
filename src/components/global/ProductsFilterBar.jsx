import React from "react"
import ManageSearchIcon from "@mui/icons-material/ManageSearch"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"

const ProductsFilterBar = ({ items }) => {
  return (
    <div className="filterBar flex-1 flex flex-row justify-between p-3 border-t-0 border border-gray-700 rounded-b-md">
      <div className="categoriesDiv flex flex-row gap-4">
        <span className="filterBarSpan spanActive bg py-x">All</span>
        <span className="filterBarSpan ">Art</span>
        <span className="filterBarSpan ">Kids</span>
        <span className="filterBarSpan ">Kitchen</span>
        <span className="filterBarSpan ">Electronics</span>
      </div>
      <div className="rightSortDiv  flex flex-row gap-4">
        <span className="filterBarSpan ">{items} Items found</span>

        <span className="filterBarSpan preferencesSort flex flex-row justify-center">
          <ManageSearchIcon />
          <input
            className="h-inherit text-[14px] p-0 px-2 m-0 bg-transparent outline-0"
            placeholder="Search item..."
          />
        </span>
        <span className="filterBarSpan priceAndLikesFilter">
          <select
            className="appearance-none outline-0 w-full px-2 bg-inherit transition"
            name="#"
            id="#">
            <option value="#">
              Sort by
            </option>
            <option value="1">Item 1</option>
            <option value="2">Item 2</option>
            <option value="3">Item 3</option>
          </select>
        </span>
      </div>
    </div>
  )
}

export default ProductsFilterBar
