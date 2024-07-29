import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Lê Mèo",
    age: 3,
  },
  length: 3,
};

const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeName(state, action) {
      state.user.name = action.payload;
    },
    changeAge(state, action) {
      state.user.age = action.payload;
    },
    changeLength(state, action) {
      state.length = action.payload;
    },
  },
});
export const { changeAge, changeName, changeLength } = useSlice.actions;
export default useSlice.reducer;
