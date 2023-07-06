import React from "react";
import { Articles } from "../Data";
import "./index.css";
function ArticleList() {
  return (
    <div className="list">
      {Articles?.map(({ title, upvotes, date }, index) => (
        <ul>
          <li key={index} className="listItem">
            <h3>{title}</h3>
            <p>Upvotes: {upvotes}</p>
            <p>Date: {date}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ArticleList;
