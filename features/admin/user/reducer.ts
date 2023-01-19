import { createReducer } from "@reduxjs/toolkit";
import { getUser, addUser, getUserById } from "@/features/admin/user/actions";
import { UserState } from "@/models/user.model";

const initialState: UserState = {
  data: {
    user_id: "",
    fullname: "",
    username: "",
    email: "",
    level: "",
    created_at: "",
  },
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(getUser.fulfilled, (state, action) => {
    state.data = action.payload;
  });
  builder.addCase(getUserById.fulfilled, (state, action) => {
    state.data = action.payload;
  });
});

export default userReducer;
