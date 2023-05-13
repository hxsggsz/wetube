import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLogInOpen: false,
  isSignUpOpen: false,
}

const sliceAuthModal = createSlice({
  name: "AuthModal",
  initialState,
  reducers: {
    handleShowLogIn(state) {
      return {...state, isLogInOpen: !state.isLogInOpen}
    },

    handleShowSignUp(state) {
      return {...state, isSignUpOpen: !state.isSignUpOpen}
    }
  }
})

export default sliceAuthModal.reducer
export const {handleShowLogIn, handleShowSignUp} = sliceAuthModal.actions