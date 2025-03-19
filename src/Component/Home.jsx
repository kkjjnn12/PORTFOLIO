import React from "react";
import "./Home.css"; // Make sure the CSS file is updated accordingly

const Home = () => {
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 30; i++) {  // Increase the number of stars for more effect
      stars.push(<div key={i} className="shooting-star" style={{ left: `${Math.random() * 100}vw`, animationDuration: `${Math.random() * 2 + 1}s`, animationDelay: `${Math.random() * 5}s`, animationTimingFunction: 'ease-in-out' }}></div>);
    }
    return stars;
  };

  return (
    <div className="home-container">
      {/* Create falling stars */}
      {generateStars()}

      <div className="left-side">
        <h1 className="welcome-text">Welcome to My Portfolio</h1>
        <p className="hi-text">Hi! I am Prakash</p>
        <p className="intro-text">A passionate web developer with a love for creating beautiful and functional websites.</p>
        <a href="http://localhost:3001/project" className="explore-button">Explore My Work</a>
      </div>

      <div className="right-side">
        <img src="/Image/boy.png" alt="Boy" width={500} className="profile-image"/>
      </div>
    </div>
  );
};

export default Home;
































