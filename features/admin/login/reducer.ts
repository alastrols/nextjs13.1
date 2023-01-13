import { createReducer } from "@reduxjs/toolkit";
import { login, getSession } from "@/features/admin/login/actions";
import { loginState } from "@/models/login.model";

const initialState: loginState = {
  data: {
    user_id: "",
    username: "",
    fullname: "",
    token: "",
  },
  isAuthenticated: false,
  isAuthenticating: true,
};

export const loginReducer = createReducer(initialState, (builder) => {
  builder.addCase(login.fulfilled, (state, action) => {
    state.data = action.payload;
    state.isAuthenticated = true;
    state.isAuthenticating = false;
  });
  builder.addCase(getSession.fulfilled, (state, action) => {
    state.isAuthenticating = false;
    if (action.payload && action.payload.data && action.payload.data.token) {
      state.data = action.payload;
      state.isAuthenticated = true;
    }
  });
});

export default loginReducer;
