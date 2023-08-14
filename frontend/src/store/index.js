import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./slices/isLoading.slice";
import activitiesSlice from "./slices/activities.slice";
import paymentsListSlice from "./slices/paymentsList.slice";
import activitiesListSlice from "./slices/activitiesList.slice";

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    activities: activitiesSlice,
    paymentsList: paymentsListSlice,
    activitiesList: activitiesListSlice,
  },
});
