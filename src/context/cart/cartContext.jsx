import { createContext, useReducer } from "react"
import cartReducer from "./cartReducer"

const cartContext = createContext()

const initialState = {
  cartItems: [],
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (item) => {
    return dispatch({
      type: "Add_To_Cart",
      payload: { item },
    })
  }
  const removeItem = (itemId) => {
    return dispatch({
      type: "Remove_From_Cart",
      payload: { itemId },
    })
  }
  const incrementItem = (itemId) => {
    return dispatch({
      type: "Increment_Item",
      payload: { itemId },
    })
  }
  const decrementItem = (itemId) => {
    return dispatch({
      type: "Decrement_Item",
      payload: { itemId },
    })
  }
  const clearCart = (itemId) => {
    return dispatch({
      type: "Clear_Cart",
    })
  }

  const values = {
    ...state,
    products: state.cartItems,
    addItem,
    removeItem,
    incrementItem,
    decrementItem,
    clearCart,
  }
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>
}

export default cartContext
export { CartProvider }
