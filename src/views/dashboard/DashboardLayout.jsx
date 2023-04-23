import React, { useState, useEffect } from "react"
import logo from "../../assets/vite.svg"
import { Link, Outlet, NavLink } from "react-router-dom"
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar"
import { sidebarClasses } from "react-pro-sidebar"
import { useNavigate } from "react-router-dom"
import {
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaSearch,
  FaBell,
  FaSun,
  FaEye,
  FaPlayCircle,
  FaDashcube,
} from "react-icons/fa"
import { AiOutlineBell, AiOutlineAccountBook } from "react-icons/ai"

const DashboardLayout = () => {
  const logout = () => {
    console.log("s")
    localStorage.removeItem("userInfo")
  }
  const navigate = useNavigate()

  const { collapseSidebar } = useProSidebar()

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo")
      navigate("/")
    }
    // getUserProfileData();
  }, [])

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "rgb(47,51,73)",
          },
        }}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
        }}>
        <Menu>
          <NavLink
            to="/"
            className="sidenavAppImg flex flex-row p-5 justify-start gap-3 items-center">
            <img src={logo} alt="logo" />
            <span className="text-[rgb(228,230,244,0.87)] italic text-2xl font-bold font-italic">
              EasyBuy
            </span>
            {/* <button onClick={() => collapseSidebar()}>Collapse</button> */}
          </NavLink>

          <NavLink to="/account">
            <li className="item">Seller DashBoard</li>
          </NavLink>
          <NavLink to="/account/buyerdash">
            <li className="item">Buyer DashBoard</li>
          </NavLink>
          <NavLink to="/account/profile">
            <li className="item">Profile</li>
          </NavLink>
          <NavLink to="/account/wallet">
            <li className="item">Wallet</li>
          </NavLink>
          <NavLink to="/account/chatroom">
            <li className="item">ChatRoom</li>
          </NavLink>
          <NavLink to="/posview">
            <li className="item">POS View</li>
          </NavLink>
          <NavLink to="/account/support">
            <li className="item">Support Tickt</li>
          </NavLink>
          {/*  */}
          <h5 className="gap-0 p-0 font-bold">Seller Pages</h5>
          <div className="list-none">
            <NavLink to="/account/broadcast">
              <li className="item">Broadcast</li>
            </NavLink>
          </div>
          <NavLink to="/account/billing">
            <li className="item">Billing</li>
          </NavLink>
          <NavLink to="/account/products">
            <li className="item">Products</li>
          </NavLink>

          {/*  */}
          <div className="navItems list-none w-full">
            <h5 className="gap-0 p-0 font-bold">Buyer Pages</h5>

            <NavLink to="/account/orders">
              <li className="item">My Orders</li>
            </NavLink>
            <NavLink to="/account/downloads">
              <li className="item">DownLoads</li>
            </NavLink>
            <NavLink to="/account/wishlist">
              <li className="item">My Wishlist</li>
            </NavLink>
            <NavLink to="/account/refunds">
              <li className="item">Refund Request</li>
            </NavLink>
            <NavLink to="/account/compare">
              <li className="item">Compare</li>
            </NavLink>
          </div>
        </Menu>
      </Sidebar>
      <main className="w-full p-3">
        <div className="mainNavbar z-50 flex flex-row items-center justify-between bg-[rgb(47,51,73)] p-3 sticky top-3 flex-1 rounded-md">
          {/* <button onClick={() => collapseSidebar()}>Collapse</button> */}
          <span className="search flex flex-row flex-[0.5] gap-3 items-center">
            <FaSearch className="text-2xl" />
            <input
              type="search"
              name="Search"
              id=""
              placeholder="Search"
              className="flex-1 text-xl bg-inherit opacity-80 px-2 focus:outline-none focus:ring-0"
            />
          </span>
          <div className="dashnavItems flex flex-row gap-2 ">
            <div className="navitemIcon text-3xl cursor-pointer">
              <FaSun />
            </div>
            <div className="navitemIcon text-3xl cursor-pointer">
              <AiOutlineAccountBook />
            </div>
            <div className="navitemIcon text-3xl cursor-pointer relative ">
              <span className="counter bg-red-800 rounded-full text-[11px] w-[14px] h-[17px] absolute top-0 right-0 flex flex-row justify-center items-center p-0">
                3
              </span>
              <AiOutlineBell />
            </div>
            <div className="navitemIcon text-3xl cursor-pointer">
              <FaBell />
            </div>
            <div className="navitemIcon text-3xl cursor-pointer">
              <FaDashcube onClick={logout} />
            </div>
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
