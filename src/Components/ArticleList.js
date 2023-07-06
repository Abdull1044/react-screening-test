import React from "react";

import "./index.css";
function ArticleList({Articles}) {
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
