import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    is_modal_open: false,
    modal_type: "",
  },
  reducers: {
    set_is_modal_open: (state, action) => {
      state.is_modal_open = action.payload;
    },
    set_modal_type: (s, a) => {
      s.modal_type = a.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set_is_modal_open, set_modal_type } = userSlice.actions;

export default userSlice.reducer;
