const commonReducer = (state, action) => {
  switch (action.type) {
    case "Toggle_Form":
      return {
        ...state,
        isFormOpen: action.payload.toggle,
      }
    case "Toggle_Modal":
      return {
        ...state,
        isModalOpen: action.payload.toggle,
      }
    case "User_Info":
      return {
        ...state,
        formUserInfo: action.info,
      }
    case "Popup_Message":
      return {
        ...state,
        isPopUpOpen: action.payload.info,
      }
  }
}

export default commonReducer
