import React from "react";
// import { Jumbotron } from "react-bootstrap";

const HOME = () => (
  <div className='homePageWrapper'>

    <div className='aboutMeWrapper'>
      <h2 className='aboutMeTitle'>
        About Me
      </h2>
      <p className='aboutMeBody'>
        Hi, I'm Ashton. I'm a computer science student with a focus in web development. 
        I am currently enrolled at Salt Lake Community College, I am set to graduate in the spring of 2021.
      </p>
      <br></br>
      <p className='aboutMeBody'>
        I am a graduate of the University of Utah's web development coding bootcamp program, which consits of a rigourous 6 month
        course designed to provide individuals with in demand skills for the workplace.
      </p>
    </div>

    <br />

    <div className='randomFactsWrapper'>
      <h3 className='factsLabel'>3 Random Facts About Me</h3>
      <ul className='randomFacts'>
        <li className='fact'>I was the captain of my high school basketball team during my senionr year at 
        American Preparatory Academy in West Valley City, Utah.</li>
        <br />
        <li className='fact'>Growing up I originally wanted to be a physicist or an engineer and even did an internship at 
        Mixtec North America, a small industrial mixeer manufacutrer based in Salt Lake City, Utah.</li>
        <br />
        <li className='fact'>I'm currently training Brazilain Jiu-Jitsu with Team Fusion in Salt Lake City, Utah.</li>
      </ul>
    </div>

  </div>
);

export default HOME;