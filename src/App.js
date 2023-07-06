import "./App.css";
import { ArticleList } from "./Components";


function App() {
  return (
    <div className="App">
      <div className="RowCenter">
        <h2>Acticles</h2>
      </div>
      <div className="RowCenter">
        <ArticleList />
      </div>
      <div className=" RowCenter ButtonContainer">
        <button>Most Upvoted</button>
        <button>Most Recent</button>
      </div>
    </div>
  );
}

export default App;
