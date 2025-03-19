import React, { useState } from "react";
import "./Project.css"; // Import your CSS file here

const Card = ({ title, description, colorClass, number }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <h2 className={colorClass}>{title}</h2>
          {showDescription && <p>{description}</p>}
        </div>
      </div>
      <div className="face face2">
        <h2>{number}</h2>
      </div>
      <div className="card-actions">
        <button className="submit-btn">View</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Card
        title="Dress Shop Website - Html, Css, Bootstrap, Javascript, Jquery, React.   I Designed and developed a fully functional Dress e-commerce website with product browsing, selection, and cart feature."
        colorClass="java"
        number="01"
      />
      <Card
        title="Portfolio - React. I Built an dynamic and visually striking portfolio website using React, highlighting my skills, experience, and key projects with an intuitive user experience."
        colorClass="python"
        number="02"
      />
    </div>
  );
};

export default App;
 