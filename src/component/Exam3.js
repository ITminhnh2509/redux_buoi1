import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAVG, rechecked } from "../redux/studentSlice";

export default function Exam3() {
  const student = useSelector((state) => state.student.student);
  const checked = useSelector((state) => state.student.checked);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Exam3</h1>
      <h3>Student's name: {student.name}</h3>
      <h3>Student's Math: {student.math}</h3>
      <h3>Student's pro: {student.pro}</h3>
      <h3>Student's dtb: {student.dtb}</h3>
      <h3>Student's checked: {checked ? "True" : "False"}</h3>
      <button onClick={() => dispatch(rechecked())}>rechecked</button>
      <button onClick={() => dispatch(changeAVG())}>AVg</button>
    </div>
  );
}
