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
        <button
          onClick={() => {
            const sortedByDate = [...Articles].sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            );
            setData(sortedByDate);
          }}
        >
          Most Recent
        </button>
        <button
          onClick={() => {
            setData(Articles);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
