const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      console.log(action.type)
      const newItemId = action.payload.item._id
      console.log(action.payload.item._id)

      const itemExists = state.cartItems.some((item) => item._id === newItemId)

      let updatedCartItems = null

      if (itemExists) {
        updatedCartItems = state.cartItems.map((item) => {
          if (item.id === newItemId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }
          return item
        })
      } else {
        updatedCartItems = [...state.cartItems, action.payload.item]
      }
      return {
        ...state,
        cartItems: updatedCartItems,
      }

    case "Remove_From_Cart":
      console.log(action.type)
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload.itemId
        ),
      }

    case "Increment_Item":
      console.log(action.type)
      console.log(action.payload.itemId)
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item._id === action.payload.itemId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }
          return item
        }),
      }

    case "Decrement_Item":
      console.log(action.type)
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item._id === action.payload.itemId) {
              return {
                ...item,
                quantity: item.quantity - 1,
              }
            }
            return item
          })
          .filter((item) => item.quantity !== 0),
      }

    case "Clear_Cart":
      return {
        ...state,
        cartItems: [],
      }

    default:
      return state
  }
}

export default cartReducer
