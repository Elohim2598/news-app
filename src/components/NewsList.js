import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NewsItem } from './NewsItem';
import { useSpring, animated } from 'react-spring';
//api key= d62356cfa0764cf496da14a8ebe1e004
const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d62356cfa0764cf496da14a8ebe1e004'
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  const style2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });

  return (
    <animated.div style={style2}>
      {articles.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </animated.div>
  );
};
export default NewsList;
