import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../../components/global/Navbar"

const Main = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-40">
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}

export default Main
