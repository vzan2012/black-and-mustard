import React from "react";

// TODO: Check CSS Modules
import classes from "./LatestNews.module.css";
import NewsItem from "./NewsItem/NewsItem";

const LatestNews = () => {
  return (
    <div className="news-section">
      <h3>Latest News</h3>
      <NewsItem
        title="New Website Launched"
        date="August 1st, 2022"
        showSizeLimit="80"
      >
        2022 sees the redesign of our website. Take a look around and let us
        know what you think
      </NewsItem>
      <NewsItem
        title="New Website Launched 2"
        date="August 1st, 2023"
        showSizeLimit="80"
      >
        2023 sees the redesign of our website. Take a look around and
      </NewsItem>
    </div>
  );
};

export default LatestNews;
