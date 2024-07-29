import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeName, changeLength } from "../redux/useSlice";

export default function Exam2() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const length = useSelector((state) => state.user.length);
  return (
    <div>
      <h1>Exam 2</h1>
      <h3>User's name: {user.name}</h3>
      <h3>User's age: {user.age}</h3>
      <h3>Length: {length}</h3>
      <button onClick={() => dispatch(changeAge(1))}>changeAge</button>
      <button onClick={() => dispatch(changeName("Lê thỏ"))}>changeName</button>
      <button onClick={() => dispatch(changeLength(10))}>changelength</button>
    </div>
  );
}
