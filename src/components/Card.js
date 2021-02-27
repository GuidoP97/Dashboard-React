import React from 'react';
import "./Card.css";

const Card = ({username, name, socialIcon, followers, rowIcon, todayFollower}) => {
  const cardClass = `card ${name}`
  return (
    <article className={cardClass}>
      <p className="card-title">
          <img src={socialIcon} alt=""/>{username}
      </p>
      <p className="card-followers">
          <span className="card-followers-number">{followers}</span>
          <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
          <img src={rowIcon} alt=""/>{todayFollower} Today
      </p>
    </article>
  );
}

export default Card;
