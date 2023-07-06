import { useState } from "react";
import "./App.css";
import { ArticleList } from "./Components";

import { Articles } from "./Data";
function App() {
  let [data, setData] = useState(Articles);
  return (
    <div className="App">
      <div className="RowCenter">
        <h2>Acticles</h2>
      </div>
      <div className="RowCenter">
        <ArticleList Articles={data} />
      </div>
      <div className=" RowCenter ButtonContainer">
        <button
          onClick={() => {
            const sortedByUpvotes = [...Articles].sort(
              (a, b) => b.upvotes - a.upvotes
            );
            setData(sortedByUpvotes);
          }}
        >
          Most Upvoted
        </button>
        <button >Most Recent</button>
      </div>
    </div>
  );
}

export default App;
