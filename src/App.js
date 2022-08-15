import "./App.css";
import CourseInput from "./Components/CourseInput/CourseInput";
import { useState } from "react";
import CourseList from "./Components/CourseList/CourseList";
function App() {
  const [courses, setCourses] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);
  const onAddCoureHandle = (course) => {
    setCourses((prevCourses) => {
      const coursesUpdate = [...prevCourses];
      coursesUpdate.unshift({ text: course, id: Math.random().toString() });
      return coursesUpdate;
    });
  };
  const deleteItemHandler = (courseId) => {
    setCourses((prevCourses) => {
      const coursesUpdate = prevCourses.filter(
        (course) => course.id !== courseId
      );
      return coursesUpdate;
    });
  };
  return (
    <div className="container">
      <div className="inputArea">
        <CourseInput onAddCourse={onAddCoureHandle}></CourseInput>
      </div>
      <div className="courses">
        <CourseList
          items={courses}
          onDeleteItem={deleteItemHandler}
        ></CourseList>
      </div>
    </div>
  );
}

export default App;
