import { createReducer } from "@reduxjs/toolkit";
import { getContact, getContactById } from "@/features/admin/contact/actions";
import { ContactState } from "@/models/contact.model";

const initialState: ContactState = {
  data: {
    contact_id: "",
    fullname: "",
    company_name: "",
    department: "",
    phone_number: "",
    fax: "",
    email: "",
    subject: "",
    detail: "",
    file: "",
    created_at: "",
  },
};

export const contactReducer = createReducer(initialState, (builder) => {
  builder.addCase(getContact.fulfilled, (state, action) => {
    state.data = action.payload;
  });
  builder.addCase(getContactById.fulfilled, (state, action) => {
    state.data = action.payload;
  });
});

export default contactReducer;
