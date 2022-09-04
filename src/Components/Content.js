import React from "react";
function Content(props) {
  console.log(" Children Render");
  return (
    <div>
      <p>{props.show ? "trong" : ""}</p>
    </div>
  );
}
export default React.memo(Content);
// khi nào state thay đổi thì mới render lại chung với thành phần chứa nó
