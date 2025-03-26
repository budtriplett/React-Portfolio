import React from 'react';

const Resume = () => {
  const resumeData = {
    personalInfo: {
      name: 'Bud Triplett',
      title: 'Web Developer',
      email: 'bud.triplett@yahoo.com',
      phone: '(417) 718-9299',
    },
    education: [
      {
        degree: 'History Education',
        university: 'Missouri State University',
        dates: '2019 - 2025',
      },
    ],
    workExperience: [
      {
        title: 'Bartender',
        company: 'Mix Ultralounge',
        dates: '2022 - Present',
        description: 'Slinging stiff cocktails and making sure everyone has a good time.',
      },
    ],
    skills: ['JavaScript', 'React', 'HTML/CSS', 'Git', 'Python'],
  };

  return (
    <div className="resume">
      <header>
        <h1>{resumeData.personalInfo.name}</h1>
        <h2>{resumeData.personalInfo.title}</h2>
        <p>Email: {resumeData.personalInfo.email}</p>
        <p>Phone: {resumeData.personalInfo.phone}</p>
        <a href="React Portfolio/public/Bud Triplett_ Resume.pdf" download="Bud Triplett_ Resume.pdf" className="download-link">
          Download Resume
        </a>
      </header>
      <section>
        <h3>Education</h3>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.degree}</h4>
            <p>{edu.university}</p>
            <p>{edu.dates}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Work Experience</h3>
        {resumeData.workExperience.map((job, index) => (
          <div key={index}>
            <h4>{job.title}</h4>
            <p>{job.company}</p>
            <p>{job.dates}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Resume;