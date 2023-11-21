import { createSlice } from "@reduxjs/toolkit";

export const helperSlice = createSlice({
  name: "helper",
  initialState: {
    is_sidebar_collapsed: true,
  },
  reducers: {
    set_is_sidebar_collapsed: (state, action) => {
      state.is_sidebar_collapsed = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set_is_sidebar_collapsed } = helperSlice.actions;

export default helperSlice.reducer;
