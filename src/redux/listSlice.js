import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    { id: 1, name: "Lê Văn Hiếu", checked: true },
    { id: 2, name: "Lê Gà", checked: true },
    { id: 3, name: "Lê Thỏ", checked: false },
    { id: 4, name: "Lê Văn Xoá", checked: true },
  ],
  checkAll: false,
};

const listSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudents(state, action) {
      state.students = [
        ...state.students,
        { id: 4, name: action.payload, checked: true },
      ];
    },
    deleteStudents(state, action) {
      state.students = state.students.filter(
        (item) => item.id !== action.payload
      );
    },
    editStudents(state, action) {
      // Expect action.payload to be an object with id and new name
      const { id, name } = action.payload;
      state.students = state.students.map((student) =>
        student.id === id ? { ...student, name: name } : student
      );
    },
  },
});
export const { addStudents, deleteStudents, editStudents } = listSlice.actions;
export default listSlice.reducer;
