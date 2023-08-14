import { createSlice } from "@reduxjs/toolkit";

export const activitiesList = createSlice({
  name: "activitiesList",
  initialState: [],
  reducers: {
    setActivitiesList: (state, action) => {
      return action.payload;
    },
  },
});

export const { setActivitiesList } = activitiesList.actions;

export default activitiesList.reducer;
