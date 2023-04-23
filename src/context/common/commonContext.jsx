import { createContext, useReducer } from "react"
import commonReducer from "./commonReducer"

//create context
export const commonContext = createContext()

//create init state
const initialState = {
  isFormOpen: false,
  isModalOpen: false,
  isPopUpOpen: {
    open: false,
    message: "No Error",
  },
}

//create the provider
export const CommonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commonReducer, initialState)

  //form actions
  const toggleForm = (toggle) => {
    return dispatch({
      type: "Toggle_Form",
      payload: { toggle },
    })
  }
  const toggleModal = (toggle) => {
    return dispatch({
      type: "Toggle_Modal",
      payload: { toggle },
    })
  }

  const setFormUserInfo = ({ info }) => {
    return dispatch({
      type: "User_Info",
      info,
    })
  }

  const togglePopUp = (info) => {
    return dispatch({
      type: "Popup_Message",
      payload: { info },
    })
  }

  const values = {
    ...state,
    toggleForm,
    toggleModal,
    setFormUserInfo,
    togglePopUp,
  }
  return (
    <commonContext.Provider value={values}>{children}</commonContext.Provider>
  )
}
