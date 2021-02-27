import React from 'react';
import SmallCard from './SmallCard';
import './Overview.css'

const listSmallCard = [
  {
    id: 1,
    textViews: "Page Views", 
    socialIcon: "images/icon-facebook.svg",
    followers: "87",
    danger: "",
    rowIcon: "images/icon-up.svg",
    percentage: "3%",
  },
  {
    id : 2,
    textViews : "Likes", 
    socialIcon:"images/icon-facebook.svg",
    followers: "52",
    danger: "is-danger",
    rowIcon: "images/icon-down.svg",
    percentage: "2%",
  },
  {
    id: 3,
    textViews : "Likes", 
    socialIcon:"images/icon-instagram.svg",
    followers: "5462",
    danger: "",
    rowIcon: "images/icon-up.svg",
    percentage: "2257%",
  },
  {
    id: 4,
    textViews : "Profile Views", 
    socialIcon:"images/icon-instagram.svg",
    followers: "52k",
    danger: "",
    rowIcon: "images/icon-up.svg",
    percentage: "1375%",
  },
  {
    id: 5,
    textViews : "Retweets", 
    socialIcon:"images/icon-twitter.svg",
    followers: "117",
    danger: "",
    rowIcon: "images/icon-up.svg",
    percentage: "303%",
  },
  {
    id: 6,
    textViews : "Likes", 
    socialIcon:"images/icon-twitter.svg",
    followers: "507",
    danger: "",
    rowIcon: "images/icon-up.svg",
    percentage: "553%",
  },
  {
    id: 7,
    textViews : "Likes", 
    socialIcon:"images/icon-youtube.svg",
    followers: "107",
    danger: "is-danger",
    rowIcon: "images/icon-down.svg",
    percentage: "19%",
  },
  {
    id: 8,
    textViews : "Total Views", 
    socialIcon:"images/icon-youtube.svg",
    followers: "1407",
    danger: "is-danger",
    rowIcon: "images/icon-down.svg",
    percentage: "12%",
  },
]

const Overview = () => {
  return (
    <section className="overview">
        <div className="wrapper">
            <h2 className="title">Overview - Today</h2>
            <div className="grid">
              {
                listSmallCard.map((items) => (
                  <SmallCard
                    key={items.id}
                    {...items}
                  />
                ))
              }
            </div>
        </div>
    </section>
  );
}

export default Overview;
