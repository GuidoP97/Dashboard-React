import React from 'react';
import Card from './Card';
import './TopCardList.css'

const cardListData = [
    {
        id: 0,
        username: '@PodestaGuido',
        followers: '1987',
        socialIcon: 'images/icon-facebook.svg',
        rowIcon: 'images/icon-up.svg',
        name: "facebook",
        todayFollower: 12,
    },
    {
        id: 1,
        username: '@PodestaGuido',
        followers: '28K',
        socialIcon: 'images/icon-twitter.svg',
        rowIcon: 'images/icon-up.svg',
        name: "twitter",
        todayFollower: 25,
    },
    {
        id: 2,
        username: '@PodestaGuido',
        followers: '6K',
        socialIcon: 'images/icon-instagram.svg',
        rowIcon: 'images/icon-up.svg',
        name: "instagram",
        todayFollower: 10,
    },
    {
        id: 3,
        username: '@PodestaGuido',
        followers: '12K',
        socialIcon: 'images/icon-youtube.svg',
        rowIcon: 'images/icon-down.svg',
        name: "youtube",
        todayFollower: 30,
    },
  ]

const TopCardList = () => {
  return (
    <section className="top-cards">
        <div className="wrapper">
            <div className="grid">
                {
                    cardListData.map((cardData) => (
                        <Card
                            key={cardData.id}
                            {...cardData}
                        />
                    ))
                }
                {/* <!-- Facebook --> */}
                {/* <!-- Twitter --> */}
                {/* <article className="card twitter">
                    <p className="card-title">
                        <img src="images/icon-twitter.svg" alt=""/> @PodestaGuido
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">28K</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="images/icon-up.svg" alt=""/> 12 Today
                    </p>
                </article> */}
                {/* <!-- Instagram --> */}
                {/* <article className="card instagram">
                    <p className="card-title">
                        <img src="images/icon-instagram.svg" alt=""/> @PodestaGuido
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">6K</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="images/icon-up.svg" alt=""/> 12 Today
                    </p>
                </article> */}
                {/* <!-- Youtube --> */}
                {/* <article className="card youtube">
                    <p className="card-title">
                        <img src="images/icon-youtube.svg" alt=""/> @PodestaGuido
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">12K</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="images/icon-up.svg" alt=""/> 12 Today
                    </p>
                </article> */}
            </div>
        </div>
    </section>
  );
}

export default TopCardList;
