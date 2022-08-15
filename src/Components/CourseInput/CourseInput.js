import { useState } from "react";
import "./CourseInput.css";
function CourseInput(props) {
  const [course, setCourse] = useState("");
  const [isValid, setIsValid] = useState(true);
  const formSubmit = (event) => {
    event.preventDefault();
    if (course.length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddCourse(course);
    setIsValid(true);
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
      <span style={{ visibility: !isValid ? "visible" : "hidden" }}>
        Dữ liệu không được để trống
      </span>
    </div>
  );
}
export default CourseInput;
