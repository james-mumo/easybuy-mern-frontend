import React from "react"
import logo from "../../assets/vite.svg"
import { Link, Outlet, NavLink } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="layout overflow-y-scroll flex flex-row w-full h-screen relative p-0 gap-2">
      <div className="sidenavBG text-[#d4dce4] bg-[rgb(47,51,73)]  text-lg w-1/6 top-0 h-screen flex overscroll-y-none flex-col border border-red-900">
        <NavLink
          to="/account"
          className="sidenavAppImg flex flex-row p-5 justify-start gap-3 items-center">
          <img src={logo} alt="logo" />
          <span className="text-[rgb(228,230,244,0.87)] italic text-2xl font-bold font-italic">
            EasyBuy
          </span>
        </NavLink>

        <div className="list-none">
          <NavLink to="/account/profile">
            <li className="item">Profile</li>
          </NavLink>
          <NavLink to="/account/broadcast">
            <li className="item">Broadcast</li>
          </NavLink>
          <NavLink to="/account/posview">
            <li className="item">POS View</li>
          </NavLink>
          <NavLink to="/account/billing">
            <li className="item">Billing</li>
          </NavLink>
          <NavLink to="/account/broadcast">
            <li className="item">StartBroadcast</li>
          </NavLink>
          <NavLink to="/account/products">
            <li className="item">Products</li>
          </NavLink>
          <NavLink to="/account/profile">
            <li className="item">mySellerProfile</li>
          </NavLink>
          <NavLink to="/account/messages">
            <li className="item">Messages</li>
          </NavLink>
          <NavLink to="/account/messages">
            <li className="item">Classified</li>
          </NavLink>
          <NavLink to="/buyer/affiliate">
            <li className="item">affiliate</li>
          </NavLink>
        </div>

        <h5 className="gap-0 p-0 font-bold">Buyer Pages</h5>
        <div className="navItems list-none flex flex-col gap-0 items-start justify-start border border-red-600 w-full">
          <NavLink to="/buyer">
            <li className="item">Buyer DashBoard</li>
          </NavLink>
          <NavLink to="/account/posview">
            <li className="item">POS View</li>
          </NavLink>
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
          <NavLink to="/account/chatroom">
            <li className="item">chatroom</li>
          </NavLink>
          <NavLink to="/account/support">
            <li className="item">Support Tickt</li>
          </NavLink>
          <NavLink to="/account/wallet">
            <li className="item">My Wallet</li>
          </NavLink>
          <NavLink to="/account/profile">
            <li className="item">Profile</li>
          </NavLink>
        </div>
      </div>
      {/*  */}
      <div className="main relative flex-1 p-2">
        <div className="dashNav list-none top-1 flex flex-row justify-start gap-3 px-4 bg-[#663399] w-full ">
          <NavLink to="/account/jhj">
            <li className="item">Settings</li>
          </NavLink>{" "}
          <NavLink to="/account/nbv">
            <li className="item">Theme</li>
          </NavLink>
          <NavLink to="/account/nbbn">
            <li className="item">Logout</li>
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
