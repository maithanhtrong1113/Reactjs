import { useState } from "react";
import "./CourseInput.css";
function CourseInput(props) {
  const [course, setCourse] = useState("");
  const formSubmit = (event) => {
    event.preventDefault();
    props.onAddCourse(course);
  };
  const inputHandler = (event) => {
    setCourse(event.target.value);
  };
  return (
    <div className="Input">
      <label> Course Goal</label>
      <form className="formOnsubmit" onSubmit={formSubmit}>
        <input onChange={inputHandler} />
        <button type="submit"> Add Goal</button>
      </form>
    </div>
  );
}
export default CourseInput;
