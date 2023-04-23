import React, { useContext } from "react"
import { ProSidebarProvider } from "react-pro-sidebar"
import RouterRoutes from "./routes/RouterRoutes"
import Navbar from "./components/global/Navbar"
import { CommonProvider } from "./context/common/commonContext"
import { transitions, positions, Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import { CartProvider } from "./context/cart/cartContext"

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
}

const App = () => {
  return (
    <ProSidebarProvider>
      <CartProvider>
        <CommonProvider>
          <AlertProvider template={AlertTemplate} {...options}>
            <RouterRoutes />
          </AlertProvider>
          {/* <Footer /> */}
        </CommonProvider>
      </CartProvider>
    </ProSidebarProvider>
  )
}

export default App
