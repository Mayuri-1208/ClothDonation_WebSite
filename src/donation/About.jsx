import React from "react";
import "./About.css";
import heroImg from "../assets/image1.jpg"; 
import featureImg1 from "../assets/image2.jpg";
import featureImg2 from "../assets/image3.webp";
import teamImg1 from "../assets/image4.webp";
import teamImg2 from "../assets/image2.jpg";
import teamImg3 from "../assets/image3.webp";

const About = () => {
  return (
    <section className="about">
      {/* Hero Banner */}
      <div className="about-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="about-hero-text">
          <h1>About <span>AanandiNarayan</span></h1>
          <p>Spreading warmth, one garment at a time ❤️</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-container">
        <h2 className="section-title">Who We Are</h2>
        <p className="intro">
          We connect compassionate donors with those in need through trusted local NGOs.
          Our team ensures every cloth donation is collected, sorted, and delivered with care and dignity.
        </p>
      </div>

      {/* Features */}
      <div className="about-features">
        <div className="feature-card">
          <img src={featureImg1} alt="Sorting clothes" />
          <h3>Efficient Sorting</h3>
          <p>Our volunteers carefully sort each donation to ensure quality and usability.</p>
        </div>
        <div className="feature-card">
          <img src={featureImg2} alt="Helping hands" />
          <h3>Trusted Delivery</h3>
          <p>We partner with reliable NGOs to ensure your donations reach those who need them most.</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="about-team">
        <h2>Meet Our Heroes</h2>
        <div className="team-collage">
          <img src={teamImg1} alt="Team working" className="tilt-left" />
          <img src={teamImg2} alt="Team helping" className="tilt-right" />
          <img src={teamImg3} alt="Sorting clothes" className="tilt-left" />
        </div>
      </div>
    </section>
  );
};

export default About;
