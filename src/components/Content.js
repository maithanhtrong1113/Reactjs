import { useState } from "react";

function Content() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
    </div>
  );
}
export default Content;
