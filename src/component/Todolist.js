import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudents, deleteStudents, editStudents } from "../redux/listSlice";
import Add from "./Add";
export default function Todolist() {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();
  //
  const [isEdit, setIsEdit] = useState({ id: null, flag: false });
  const [text, setText] = useState("");
  const handle_add = (text) => {
    dispatch(addStudents(text));
  };
  const [flag, setFlag] = useState(false);
  const filterStudent = (list, flag) => {
    if (flag == "checked") {
      return list.filter((item) => item.checked);
    } else if (flag == "nochecked") {
      return list.filter((item) => !item.checked);
    } else {
      return list;
    }
  };
  return (
    <div>
      <Add handle_add={handle_add} /> <br />
      <button onClick={() => setFlag("checked")}>Checked</button>
      <button onClick={() => setFlag("nochecked")}>NoChecked</button>
      <button onClick={() => setFlag("")}>Clear</button>
      {filterStudent(students, flag).map((item, index) => (
        <div key={index}>
          {!isEdit.flag && isEdit.id === item.id ? (
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch(editStudents({ id: item.id, name: text }));
                  setText(""); // Clear the input field
                  setIsEdit({ id: null, flag: true }); // Reset edit state after saving
                }
              }}
            />
          ) : (
            <p
              onDoubleClick={() => {
                setText(item.name); // Set the initial text to current item name
                setIsEdit({ id: item.id, flag: false });
              }}
            >
              {item.name}
            </p>
          )}
          <button onClick={() => dispatch(deleteStudents(item.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
