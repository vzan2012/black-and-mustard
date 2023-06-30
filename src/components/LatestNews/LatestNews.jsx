import React from "react";

// TODO: Check CSS Modules
import classes from "./LatestNews.module.css";
import NewsItem from "./NewsItem/NewsItem";

const LatestNews = () => {
  return (
    <div className="news-section">
      <h3>Latest News</h3>
      <NewsItem title="New Website Launched" date="August 1st, 2014">
        2014 sees the redesign of our website. Take a look around and let us
        know what you think.
      </NewsItem>
    </div>
  );
};

export default LatestNews;
