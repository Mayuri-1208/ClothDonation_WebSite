import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero full-bleed">
      <div className="overlay"></div>

      <div className="hero__content">
        <h1 className="fade-in">
          Welcome to <span className="brand">AanandiNarayan</span>
        </h1>
        <p className="fade-in delay-1">
          Your trusted cloth donation partner 💗
        </p>

        <Link to="/donate" className="fade-in delay-2">
          <button className="cta-button">
            Donate Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
