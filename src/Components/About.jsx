import React from 'react';
import './About.css';
import pdf from '../pdf/resume.pdf'

const About = () => {
  let handelWhat = () => {
    window.open('https://wa.me/7350161287', '_blank');
  };

  let handelCv = () => {
    let link = document.createElement('a');
    link.href = {pdf};
    link.download = 'cv1.pdf';
    link.click();
  };

  return (
    <>
      <section className="container about" id="about">
        <div className="main">
          <img src="/assets/hero/hero2.jpeg" alt="" />
          <div className="about-text">
            <h1 className="head1">About Me</h1>
            <h3 className="head3">Full Stack Developer</h3>
            <p className="para1">
              Hello, my name is Prajwal Helunde, and I am a Full Stack Developer with expertise in React.js, Node.js, MongoDB, Express.js, MySQL, and experience in AWS and DevOps practices, including CI/CD pipelines.
              <br />
              <span className="span1">Experience:</span> Over the past year, I have built and deployed scalable web applications, integrating both frontend and backend technologies. I have a deep understanding of RESTful APIs and have worked on several live projects where I managed databases and optimized server-side operations.
              <br />
              <span className="span1">Hands-on Projects:</span> I have worked on live projects utilizing AWS services to deploy applications in a cloud environment, set up CI/CD pipelines, and ensure smooth integration and delivery of new features. My experience also includes handling databases such as MySQL and MongoDB, ensuring efficient data flow between the server and client.
            </p>
            <button type="button" className="btn1" onClick={handelWhat}>
              Let's Talk
            </button>
            <button type="button" className="cv" onClick={handelCv}>
              My CV
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
