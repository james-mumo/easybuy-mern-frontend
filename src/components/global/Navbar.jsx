import React, { useContext, useState, useEffect } from "react"
import logo from "../../assets/vite.svg"
import DvrIcon from "@mui/icons-material/Dvr"
import LiveTvIcon from "@mui/icons-material/LiveTv"
import SupervisedUserCircleSharpIcon from "@mui/icons-material/SupervisedUserCircleSharp"
import CameraSharpIcon from "@mui/icons-material/CameraSharp"
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded"
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded"
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded"
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone"
import ShoppingBasketTwoToneIcon from "@mui/icons-material/ShoppingBasketTwoTone"
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices"
import { NavLink } from "react-router-dom"
import { commonContext } from "../../context/common/commonContext"
import cartContext from "../../context/cart/cartContext"
import Forms from "../global/Forms"

const Navbar = () => {
  const { toggleForm, togglePopUp } = useContext(commonContext)
  const { cartItems } = useContext(cartContext)
  const cartQuantity = cartItems.length

  const [posView, setPosView] = useState(false)

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const login = () => {
    localStorage.removeItem("userInfo")
    setIsLoggedIn(!isLoggedIn)
  }

  const currentPage = () => {
    let url = window.location.href.split("/")
    // url = url[url.length - 1]
    url = url.includes("posview")
    if (url) {
      setPosView(true)
    }
  }

  useEffect(() => {
    currentPage()
  }, [])

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
    // getUserProfileData();
  }, [])
  return (
    <div className="">
      <div className="navbar top-0 flex flex-row justify-between px-10 py-3">
        <div className="logo text-2xl flex flex-row gap-1 cursor-pointer h-8 justify-center align-middle font-mono font-bold hover:border-dashed">
          {!posView ? (
            <NavLink to="/" className="flex flex-row">
              <img src={logo} alt="logo" />
              <span className="text-[#fffdfd]">EasyBuy</span>
            </NavLink>
          ) : (
            <a href="/" className="flex flex-row">
              <img src={logo} alt="logo" />
              <span className="text-[#fffdfd]">EasyBuy</span>
            </a>
          )}
        </div>
        {!posView ? (
          <>
            {/*  */}
            <div className="navButtons flex flex-row justify-center items-center gap-3">
              <a href="/posview">
                <div className="navigationButton">
                  <DvrIcon /> <span className="navItemSpan">POS View</span>
                </div>
              </a>
              <NavLink to="/livesellers">
                <div className="navigationButton">
                  <CameraSharpIcon />
                  <span className="navItemSpan">Live Sellers</span>
                </div>
              </NavLink>
              <NavLink to="/livesellers/99">
                <div className="navigationButton">
                  <LiveTvIcon /> <span className="navItemSpan">Live Now</span>
                </div>
              </NavLink>

              <NavLink to="/sellers">
                <div className="navigationButton">
                  <SupervisedUserCircleSharpIcon />
                  <span className="navItemSpan">Sellers</span>
                </div>
              </NavLink>

              <NavLink to="/products">
                <div className="navigationButton">
                  <ShoppingBasketTwoToneIcon />
                  <span className="navItemSpan">Products</span>
                </div>
              </NavLink>

              <NavLink to="/cart">
                <div className="navigationButton relative px-10">
                  <LocalMallRoundedIcon />
                  <span className="navItemSpan">Cart</span>
                  <span className="navItemSpan pr-1">
                    <span className="counter absolute font-semibold text-red-500 rounded-full top-0 p-0 right-0">
                      {cartQuantity > 0 ? cartQuantity : <></>}
                    </span>
                  </span>
                </div>
              </NavLink>

              {isLoggedIn ? (
                <>
                  <NavLink to="/account">
                    <div className="navigationButton">
                      <AdminPanelSettingsRoundedIcon />
                      <span className="navItemSpan">Account</span>
                    </div>
                  </NavLink>
                  <NavLink onClick={login}>
                    <div className="navigationButton">
                      <LoginTwoToneIcon />{" "}
                      <span className="navItemSpan">Logout</span>
                    </div>
                  </NavLink>
                </>
              ) : (
                <>
                  {!isLoggedIn && (
                    <NavLink onClick={() => toggleForm(true)}>
                      <div className="navigationButton">
                        <AccountBoxRoundedIcon />
                        <span className="navItemSpan">Login</span>
                      </div>
                    </NavLink>
                  )}
                  {isLoggedIn && (
                    <NavLink to="/account">
                      <div className="navigationButton">
                        <AdminPanelSettingsRoundedIcon />
                        <span className="navItemSpan">Account</span>
                      </div>
                    </NavLink>
                  )}
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="navButtons headerNavigationButton lightPurple flex flex-row rounded-md">
              <a
                href="/"
                className="flex flex-col justify-center px-2 rounded-md">
                <div className="headerNavigationButton">
                  <ImportantDevicesIcon />
                  <span className="navItemSpan">Website</span>
                </div>
              </a>
            </div>
          </>
        )}
      </div>
      <Forms />
    </div>
  )
}

export default Navbar
