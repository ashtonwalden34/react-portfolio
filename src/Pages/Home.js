import React from "react";

const HOME = () => (
  <div>
    <h2 className='aboutMeTitle'>
      About Me
    </h2>
    <p className='aboutMeBody'>
      Hi, I'm Ashton. I'm a computer science student currently enrolled at Salt Lake Community College.
      I recenlty graduated from the Univeristy of Utah's web coding bootcamp program.
    </p>
    <div className='profilePicContainer'>
      <img src={require('../assets/profilePic.jpg')} alt='Profile Picture' className='profilePic'/>
    </div>
  </div>
);

export default HOME;