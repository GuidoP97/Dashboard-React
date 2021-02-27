import React from 'react';
import './SmallCard.css'

const SmallCard = ({textViews, socialIcon, followers, danger, rowIcon, percentage}) => {
  const dangerClass = `card-small-percentage ${danger}`
  return (
    <div className="card-small">
      <p className="card-small-views">{ textViews }</p>
      <p className="card-small-icon">
          <img src={socialIcon} alt=""/>
      </p>
      <p className="card-small-number">{followers}</p>
      <p className={dangerClass}>
          <span>
              <img src={rowIcon} alt=""/>
              {percentage}
          </span>
      </p>
    </div>
  );
}

export default SmallCard;
