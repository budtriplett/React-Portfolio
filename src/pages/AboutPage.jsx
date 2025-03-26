import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'; 
import profileImage from '../assets/profilepic.jpeg'; 

const AboutMe = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={profileImage}
            alt="Profile"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h1 className="mt-0">About Me</h1>
          <p>
          Hi, my name is Bud Triplett, currently a software development student at the University of Kansas, currently honing my skills through an intensive bootcamp. With a passion for problem-solving and creating efficient solutions, I am eager to contribute to innovative projects in the tech industry.
          </p>
          <p>
            In my free time, I enjoy playing video games, reading, cooking and spending time
            with my friends and family. I also love to travel and explore new places, my favorite country to visit is Ireland.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;