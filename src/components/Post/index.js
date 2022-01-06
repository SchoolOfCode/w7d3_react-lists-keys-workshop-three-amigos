import React from "react";

import "./index.css";

function Post({ title, date, author, text, highlights, image }) {
  return (
    <article>
      <header>{title} </header>
      <h1> {author} </h1>
      <p>{date}</p>
      <h2>{text}</h2>
      {highlights.map(function (item, index) {
        return <li key={index}>{item}</li>;
      })}
      ;
      <img src={image.link} alt={image.alt} />
    </article>
  );
}

export default Post;
