import React from 'react';

function About(props) {
  return (
    <div className="section-content" id="about">

      <div className="about-container">

          <div className="flex-about-img">
            <img className="portfolio-img" src={process.env.PUBLIC_URL + "/assets/about-photo.png"} alt="portfolio-pic" />
          </div>

          <div className="flex-about-content">
            <h1 style={{ color: '#d9515d', margin: '0' }}>en.aboutMe</h1>

            <p>I'm currently pursuing my B.S. in Computer Science with a minor in Cognitive Science at <span style={{ color: '#d9515d' }}>University of California, San Diego</span> with an expected graduation date of Fall 2021.</p>
            <p>My immediate goal is to become a stronger fullstack developer to build cool and useful websites that users can enjoy. And for the time being, I enjoy building apps that push me to learn more about frontend development to continue expanding my tech vocabulary ッ. My most recent tech stack includes: <span style={{ color: '#d9515d' }}>Node, React, Express, MongoDB.</span></p>
            <br />

            <p>For Fun:</p>
            <p>I love skateboarding with my pals (video coming sooner or later 😎). I'm a big music enthusiast although I listen more than I play. And regrettably, I'm also an avid photoshopper whose skills are limited to making cutouts and pasting them in 3's ⍨. </p>

          </div>

      </div>

    </div>
  );
}

export default About;