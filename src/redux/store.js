import { configureStore } from "@reduxjs/toolkit";
import projFilterReducer from "./reducers/projfilter";
import extraInfo from "./reducers/extraInfo";
import extraInfoReducer from "./reducers/extraInfo";

export default configureStore({
  reducer: {
    projFilter: projFilterReducer,
    extraInfo: extraInfoReducer,
  },
});
