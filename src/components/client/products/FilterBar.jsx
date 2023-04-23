import { Button } from "@material-tailwind/react"
import React from "react"
import { filterMenu, sortMenu } from "../../../data/filterBarData"

const FilterBar = () => {
  return (
    <div className="FilterBar w-full">
      <FilterBarOptions />
    </div>
  )
}

export default FilterBar

const FilterBarOptions = () => {
  return (
    <div className="flex flex-col gap-5 text-sm">
      <div className="clearFiltersBtnDiv w-full rounded-md">
        <Button className="clearFiltersButton h-9 p-1 w-full">
          Clear Filters
        </Button>
      </div>

      {/* Sorting By */}
      <div className="sortDiv flex flex-col gap-2">
        <div className="sortByFeaturedDiv flex flex-col gap-1">
          <h3>Sort By</h3>
          <hr />
          {sortMenu.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* Filtering div */}

      <div className="filterByDiv flex flex-col gap-2">
        <h3>Filter By</h3>
        <hr />
        {filterMenu.map((item) => {
          const { id, title, menu } = item
          return (
            <div className="filter_block flex flex-col gap-1" key={id}>
              <h4>{title}</h4>
              <ul className="filter_menu flex flex-col">
                {menu.map((item, i) => (
                  <li key={i} className="filter_btn flex flex-row gap-3">
                    <input type="checkbox" />
                    <label>{item}</label>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
