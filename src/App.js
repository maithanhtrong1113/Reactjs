import React, { useState } from "react";
import Content from "./components/Content.js";
// 1. useEffect(callback)
// Gọi callback sau khi component re-render
// Gọi callback sau khi component thêm element vào DOM

//2.useEffect(callback,[])
//Chỉ gọi callback 1 lần khi component khi mounted

//3.useEffect(callback,[dependencies])
//callback sẽ được gọi khi dependencies thay đổi

// cả 3 luôn được gọi khi component mounted
// Clean-up function luôn được gọi trước khi component unmount
// const tabs = ["posts", "comments", "albums"];
function App() {
  // const [type, setType] = useState("posts");
  const [show, setShow] = useState(false);
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       console.log(posts);
  //     });
  // }, []);

  return (
    <div>
      {/* {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {" "}
          {tab}
        </button>
      ))} */}
      <button onClick={() => setShow(!show)}>Click</button>
      {show && <Content />}
    </div>
  );
}

export default App;
