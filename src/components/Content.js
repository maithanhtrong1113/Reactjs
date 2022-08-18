import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showOntop, SetOntop] = useState(false);

  // goi api
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  //hien thi nut onTop
  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY >= 200) {
        SetOntop(true);
      } else {
        SetOntop(false);
      }
    };
    window.addEventListener("scroll", handlerScroll);

    return () => {
      window.removeEventListenerEventListener("scroll", handlerScroll);
    };
  }, []);

  const onTophandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setType(tab)}>
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showOntop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
          onClick={onTophandler}
        >
          On Top
        </button>
      )}
    </div>
  );
}
export default Content;
