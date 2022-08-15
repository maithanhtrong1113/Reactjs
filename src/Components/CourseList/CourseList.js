import CourseItem from "./CourseItem/CourseItem";

function CourseList(props) {
  return (
    <ul className="course-list">
      {props.items.map((course) => (
        <CourseItem
          key={course.id}
          id={course.id}
          onDelete={props.onDeleteItem}
        >
          {course.text}
        </CourseItem>
      ))}
    </ul>
  );
}
export default CourseList;
