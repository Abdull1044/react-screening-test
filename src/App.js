import { useState } from "react";
import "./App.css";
import { ArticleList } from "./Components";
import { Articles, sortArticles } from "./Data";

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
            setData(sortArticles["upvotes"]());
          }}
        >
          Most Upvoted
        </button>
        <button
          onClick={() => {
            setData(Articles);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setData(sortArticles["date"]());
          }}
        >
          Most Recent
        </button>
      </div>
    </div>
  );
}

export default App;
