import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap-icons/font/bootstrap-icons.css';
//import './portfolio.css';
import projects  from '../components/UI/projects';

const Portfolio = () => {
    return (
        <div className="mt-5 mb-5">
          <div className="row md-2 g-2">
            {projects.map((project) => (
              <div key={project.title} className="row col justify-content-center g-3">
                <div
                  className="position-relative"
                  style={{
                    overflow: 'hidden',
                    width: '350px',
                    height: '250px',
                  }}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.overlay');
                    overlay.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.overlay');
                    overlay.style.opacity = '0';
                  }}
                >
                 
                  <img
                    src={project.liveImage}
                    alt={project.title}
                    className="img-fluid border-0"
                    style={{
                      width: '100%',
                      height: 'auto',
                      transition: 'transform 0.3s',
                    }}
                  />
    
                  <div
                    className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      opacity: '0',
                      transition: 'opacity 1s ease-in-out',
                      zIndex: '10',
                    }}
                  >
                 
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark mb-3"
                      style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                    >
                      {project.title}
                    </a>
    
                    <a
                      href={project.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark"
                    >
                      <i
                        className="bi bi-github"
                        style={{
                          fontSize: '2rem',
                        }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Portfolio;