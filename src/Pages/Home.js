import React from "react";

const HOME = () => (
  <div className='homePageWrapper'>
    <h2 className='aboutMeTitle'>
      About Me
    </h2>
    <p className='aboutMeBody'>
      Hi, I'm Ashton. I'm a computer science student currently enrolled at Salt Lake Community College.
      I recenlty graduated from the Univeristy of Utah's web coding bootcamp program.
    </p>

    <div className='randomFactsWrapper'>
      <label>3 Random Facts</label>
      <ul className='randomFacts'>
        <li className='fact'>Test Fact</li>
        <li className='fact'>Test Fact</li>
        <li className='fact'>Test Fact</li>
      </ul>
    </div>
  </div>
);

export default HOME;