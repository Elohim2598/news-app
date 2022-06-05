import React from 'react';
import './newsitem.css';
import { useSpring, animated } from 'react-spring';

export function NewsItem({ title, description, url, urlToImage }) {
  const style3 = useSpring({
    from: { opacity: 0, marginLeft: -1000 },
    to: { opacity: 1, marginLeft: 0 },
    delay: 200,
  });

  const style4 = useSpring({
    from: { opacity: 0, marginLeft: -1000 },
    to: { opacity: 1, marginLeft: 0 },
    delay: 1000,
  });

  return (
    <div className="newsItem">
      <div className="imageContainer">
        <img className="newsImage" src={urlToImage} />
      </div>
      <div className="content">
        <h3>
          <animated.a style={style3} href={url}>
            {title}
          </animated.a>
        </h3>
        <animated.p style={style4} className="description">
          {description}
        </animated.p>
      </div>
    </div>
  );
}
