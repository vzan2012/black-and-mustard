import React from "react";

const NewsItem = (props) => {
  const { title, date, children } = props;

  return (
    <div className="news-item">
      <h4>{title}</h4>
      <h5>{date}</h5>
      <p>{children}</p>
    </div>
  );
};

export default NewsItem;
