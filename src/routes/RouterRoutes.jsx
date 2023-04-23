import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "../views/client/Main"
import Header from "../components/client/Header"
import NoPage from "../views/NotFound"
import POSView from "../components/client/POSView/index"
import Cart from "../components/global/cart/Cart"
import AllProducts from "../components/client/products"
import SingleProduct from "../components/client/products/SingleProduct"
import AllSellers from "../components/client/sellers/index"
import SellerProfile from "../components/client/sellers/SellerProfile"
import LiveSellers from "../components/client/sellers/LiveSellers"
import LiveSellingPage from "../components/client/livesellers/"
import Broadcast from "../components/dashboard/seller/liveselling/Broadcast"
import DashboardLayout from "../views/dashboard/DashboardLayout"
import Dashboard from "../components/dashboard/index"
import BuyerDash from "../components/dashboard/BuyerDash"
import AccountProfile from "../components/dashboard/common/AccountProfile"
import SellerProducts from "../components/dashboard/seller/SellerProducts"
import Affiliate from "../components/dashboard/common/Affiliate"
import BuyerOrders from "../components/dashboard/buyer/BuyerOrders"
import BuyerDownloads from "../components/dashboard/buyer/BuyerDownload"
import BuyerWishlist from "../components/dashboard/buyer/BuyerWishlist"
import BuyerRefundRequest from "../components/dashboard/buyer/BuyerRefundRequest"
import BuyerCompare from "../components/dashboard/buyer/BuyerCompare"
import BuyerChat from "../components/dashboard/buyer/BuyerChat"
import BuyerWallet from "../components/dashboard/buyer/BuyerWallet"
import BuyerTicket from "../components/dashboard/buyer/BuyerTicket"
// import BuyerProfile from "../components/dashboard/buyer/BuyerProfile"

const RouterRoutes = () => {
  return (
    <>
      <BrowserRouter>
        {/*  */}
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Header />} />
            <Route path="/posview" element={<POSView />} />
            {/* seller Pages */}
            <Route path="/sellers" element={<AllSellers />} />
            <Route path="/sellers/:id" element={<SellerProfile />} />
            <Route path="/broadcast" element={<Broadcast />} />
            {/* live pages */}
            <Route path="/livesellers" element={<LiveSellers />} />
            <Route path="/livesellers/:id" element={<LiveSellingPage />} />
            {/* products */}
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            {/* Cart */}
            <Route path="/cart" element={<Cart />} />
          </Route>

          <Route path="/account" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/account/profile" element={<AccountProfile />} />
            <Route path="/account/broadcast" element={<Broadcast />} />
            {/* type == seller */}
            <Route path="/account/products" element={<SellerProducts />} />
            <Route path="/account/affiliate" element={<Affiliate />} />
            {/* buyer */}
            <Route path="/account/buyerdash" element={<BuyerDash />} />
            <Route path="/account/orders" element={<BuyerOrders />} />
            <Route path="/account/downloads" element={<BuyerDownloads />} />
            <Route path="/account/wishlist" element={<BuyerWishlist />} />
            <Route path="/account/refunds" element={<BuyerRefundRequest />} />
            <Route path="/account/compare" element={<BuyerCompare />} />
            <Route path="/account/support" element={<BuyerTicket />} />
            <Route path="/account/chatroom" element={<BuyerChat />} />
            <Route path="/account/wallet" element={<BuyerWallet />} />

            <Route path="/account/ticket" element={<BuyerTicket />} />
            {/* error page */}
            <Route path="/account/*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterRoutes
