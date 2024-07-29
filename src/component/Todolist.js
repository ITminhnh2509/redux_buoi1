import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudents, deleteStudents, editStudents } from "../redux/listSlice";
import Add from "./Add";
export default function Todolist() {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();
  //
  const [isEdit, setIsEdit] = useState({ id: "", flag: false });
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
          {!isEdit.flag && isEdit.id == item.id ? (
            <p onDoubleClick={() => setIsEdit({ id: item.id, flag: true })}>
              {item.name}
            </p>
          ) : (
            <input
              value={text}
              onChange={(e) => e.target.value}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch(editStudents(item.id, text));
                  setText("");
                }
              }}
            />
          )}
          <button onClick={() => dispatch(deleteStudents(item.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
