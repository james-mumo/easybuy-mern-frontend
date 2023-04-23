import React, { useEffect, useState, useRef, useContext } from "react"
import useOutsideClose from "../../hooks/useOutsideClose"
import useScrollDisable from "../../hooks/useScrollDisable"
import useForm from "../../hooks/useForm"
import { commonContext } from "../../context/common/commonContext"
import { Grid, TextField } from "@mui/material"
import PopMessage from "../../lib/PopMessage"
import { useAlert } from "react-alert"

const Forms = () => {
  const { isFormOpen, toggleForm, isPopUpOpen } = useContext(commonContext)
  const { inputValues, handleInputValues, handleFormSubmit } = useForm()
  const alert = useAlert()

  const handleButtonClick = () => {
    // do something

    alert.error("Button clicked successfully!")
    // alert.success("Button clicked successfully!")
  }
  const formRef = useRef()

  useOutsideClose(formRef, () => {
    toggleForm(false)
  })

  useScrollDisable(isFormOpen)

  const [isSignupVisible, setIsSignupVisible] = useState(false)

  // Signup-form visibility toggling
  const handleIsSignupVisible = () => {
    setIsSignupVisible((prevState) => !prevState)
  }

  return (
    <>
      {isFormOpen && (
        <>
          <div className="formContainer bg-[#0e0e44b7] z-50 absolute flex justify-center h-full w-full">
            <form
              onSubmit={handleFormSubmit}
              ref={formRef}
              className="formCard flex flex-col justify-center items-center relative rounded-lg border bg-[#141414] min-w-[30%] h-fit pt-2 pb-10 px-10 gap-2 border-[#050505]">
              {/*  */}
              <div className="errorDiv w-full h-7 p-0 flex justify-center items-center">
                {isPopUpOpen.open && (
                  <>
                    <PopMessage message={isPopUpOpen.message} />
                  </>
                )}
              </div>
              {/*  */}
              {/*===== Form-Header =====*/}
              <div className="form_head w-full">
                <h2 className="text-[#a9afc3] text-3xl font-semibold">
                  {isSignupVisible ? "Signup" : "Login"}
                </h2>
                <p className="text-[#a9afc3] text-lg">
                  {isSignupVisible ? (
                    <span className="hover:text-[#c6ceeb]">
                      Already have an account ?
                    </span>
                  ) : (
                    <span className="hover:text-[#c6ceeb]">
                      New to EasyBuy ?
                    </span>
                  )}
                  &nbsp;&nbsp;
                  <button type="button" onClick={handleIsSignupVisible}>
                    {isSignupVisible ? (
                      <span className="hover:text-[#c6ceeb]">Login </span>
                    ) : (
                      <span className="hover:text-[#c6ceeb]">
                        Create an account{" "}
                      </span>
                    )}
                  </button>
                </p>
              </div>
              {/*  */}
              {/*  */}
              {/*===== Form-Body =====*/}
              <div className="form_body w-full flex flex-col gap-4">
                {isSignupVisible && (
                  <Grid item className="w-full text-white">
                    <TextField
                      label="Username"
                      type="text"
                      name="username"
                      className="bg-gray-700 border border-gray-700 rounded-md text-xl w-full appearance-none focus:outline-none focus:ring-0"
                      value={inputValues.username || ""}
                      onChange={handleInputValues}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                      InputProps={{
                        required: true,
                      }}
                    />
                  </Grid>
                )}

                <Grid className="input_box w-full">
                  <TextField
                    label="Email"
                    type="mail"
                    name="email"
                    className="bg-gray-700 border border-gray-700 rounded-md text-xl w-full appearance-none focus:outline-none focus:ring-0"
                    value={inputValues.email || ""}
                    onChange={handleInputValues}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    InputProps={{
                      required: true,
                    }}
                  />
                </Grid>

                <Grid className="input_box w-full">
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    className="bg-gray-700 border border-gray-700 rounded-md text-xl w-full appearance-none focus:outline-none focus:ring-0"
                    value={inputValues.password || ""}
                    onChange={handleInputValues}
                    required
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    InputProps={{
                      required: true,
                    }}
                  />
                </Grid>

                {isSignupVisible && (
                  <Grid className="input_box w-full">
                    <TextField
                      label="ConfirmPassword"
                      type="password"
                      name="conf_password"
                      className="bg-gray-700 border border-gray-700 rounded-md text-xl w-full appearance-none focus:outline-none focus:ring-0"
                      value={inputValues.conf_password || ""}
                      onChange={handleInputValues}
                      required
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                  </Grid>
                )}

                <button
                  onClick={handleFormSubmit}
                  type="submit"
                  className="bg-[#ED1D24] w-full p-3 rounded-lg font-semibold hover:bg-[#ff0f17]">
                  {isSignupVisible ? "Signup" : "Login"}
                </button>
              </div>
              {/*===== Form-Footer =====*/}
              <div className="w-full p-1 flex flex-col">
                <div class="relative">
                  <p class="py-3 flex flex-row justify-center w-full relative z-10">
                    or login with
                  </p>
                  <p class="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/4 h-0.5 border-t border-white z-0"></p>
                  <p class="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/4 h-0.5 border-t border-white z-0"></p>
                </div>
                <div className=" flex flex-row gap-3 justify-evenly">
                  <a
                    className="bg-[#ED1D24] w-full flex flex-row justify-center p-2 px-4 rounded-lg cursor-pointer hover:bg-[#ff0f17]"
                    to="/">
                    Facebook
                  </a>
                  <a
                    className="bg-[#ED1D24] w-full flex flex-row justify-center p-2 px-4 rounded-lg cursor-pointer hover:bg-[#ff0f17]"
                    to="/">
                    Google
                  </a>
                  <a
                    className="bg-[#ED1D24] w-full flex flex-row justify-center p-2 px-4 rounded-lg cursor-pointer hover:bg-[#ff0f17]"
                    to="/">
                    Twitter
                  </a>
                </div>
              </div>
              {/*===== Form-Close-Btn =====*/}
              <div
                className="close_btn absolute top-0 right-0 text-5xl px-2 rounded-md hover:bg-gray-800 bg-gray-900"
                title="Close"
                onClick={() => toggleForm(false)}>
                &times;
              </div>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default Forms
