import { configureStore } from "@reduxjs/toolkit";
import projFilterReducer from "./reducers/projfilter";

export default configureStore({
  reducer: {
    projFilter: projFilterReducer,
  },
});
