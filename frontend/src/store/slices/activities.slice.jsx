import { createSlice } from "@reduxjs/toolkit";

export const activitiesSlice = createSlice({
  name: "activities",
  initialState: { data: [] },
  reducers: {
    setActivities2: (state, action) => {
      state.data.push(action.payload);
    },
    removeActivity: (state, action) => {
      const indexToRemove = action.payload;
      state.data.splice(indexToRemove, 1);
    },
    removeAllActivities: (state) => {
      state.data = [];
    },
  },
});

export const { setActivities2, removeActivity, removeAllActivities } =
  activitiesSlice.actions;

export default activitiesSlice.reducer;
