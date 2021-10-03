import React from "react";
import s from "./SideSection.module.css";

const News = (props) => {
  const { number, title, description } = props;
  return (
    <div className={s.News}>
      <div className={s.NewsNumber}>{number}</div>
      <div className={s.NewsDescription}>
        <span className={s.NewsTitle}>{title}</span>
        <span className={s.NewsDescription}>{description}</span>
      </div>
    </div>
  );
};

export const NewsWithTime = (props) => {
  const { number, title, description } = props;
  return (
    <div className={s.News}>
      <div className={s.NewsTime}>{number}</div>
      <div className={s.NewsDescription}>
        <span className={s.NewsTitle}>{title}</span>
        <span className={s.NewsDescription}>{description}</span>
      </div>
    </div>
  );
};

export default News;
