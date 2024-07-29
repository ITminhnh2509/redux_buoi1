import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
import userReducer from "./useSlice";
import studentReducer from "./studentSlice";
import studentsReducer from "./listSlice";
const store = configureStore({
  reducer: {
    count: countReducer,
    user: userReducer,
    student: studentReducer,
    students: studentsReducer,
  },
});
export default store;
