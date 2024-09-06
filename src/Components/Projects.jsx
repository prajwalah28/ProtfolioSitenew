import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: "ByteWave - React Website",
    description: "A responsive web application built using React.js and Tailwind CSS.",
    image: "https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130381_640.jpg",
    deployLink: "https://bytewave-eight.vercel.app/",
    githubLink: "https://github.com/prajwalah28/ByteWave.git",
  },
  {
    id: 2,
    name: "Coupon Selling Platform - MERN",
    description: "A MERN stack-based platform for buying and selling discount coupons.",
    image: "https://cdn.pixabay.com/photo/2017/05/02/15/30/streets-2278471_640.jpg",
    deployLink: "https://coupanselling.app/",
    githubLink: "https://github.com/prajwalah28/coupanbackend.git",
  },
  {
    id: 3,
    name: "Education Bank",
    description: "A platform for educational resources and banking information built using React.js.",
    image: "https://cdn.pixabay.com/photo/2016/08/16/17/12/skyscrapers-1598418_640.jpg",
    deployLink: "", // No live demo link provided
    githubLink: "https://github.com/prajwalah28/FinalEducationBank.git",
  },
  {
    id: 4,
    name: "Doctor Appointment Booking - MERN",
    description: "A full-featured appointment booking system built with the MERN stack.",
    image: "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_640.jpg",
    deployLink: "https://appointmentbooking.app/",
    githubLink: "https://github.com/prajwalah28/DoctorAppintmentMERN.git",
  },
  {
    id: 5,
    name: "KoinX Assignment",
    description: "A frontend assignment built using React.js for KoinX.",
    image: "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_640.jpg",
    deployLink: "https://frontend-koinx-assiment.vercel.app/",
    githubLink: "https://github.com/prajwalah28/frontendKoinxAssiment.git",
  }
];

const Projects = () => {
  return (
    <>
    <div id="myp">
      <div className="my-con">
        <h1 id='my-head'>Projects</h1>
        <div className="projects-page">
          <div className="projects-container">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.name} />
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="buttons">
                  <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                    <button className='p-btn'>View Deploy</button>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <button className='p-btn'>View Code</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;
