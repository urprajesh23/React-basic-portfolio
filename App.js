import React from "react";
import "./App.css";

const App = () => {
const projects = [
{ title: "Password Manager", description: "A password manager using crptography which is more secured ", link: "https://github.com/urprajesh23/PasswordManager" },
{ title: "Mentor Connect", description: "A  interactive app on connecting mentor with their students.", link: "" },
{ title: "Mental Wellness", description: "A mental health well being app based on user preferences", link: "" },
];

const skills = ["React", "JavaScript", "CSS", "HTML", "Node.js", "Python","Flask","Sql"];

return (
<div className="portfolio">
{/* Hero Section */}
<header className="hero">
<h1>Hi, I'm <span className="name">U R PRAJESH </span></h1>
<p>Web Developer | Designer | Innovator </p>
<a href="#contact" className="hero-btn">Get in Touch</a>
</header>

{/* About Section */}
<section className="about">
<h2>About Me</h2>
<p>
I am a passionate web developer and designer with a keen eye for detail and a drive to create seamless, user-friendly digital experiences. 
With a strong foundation in React, JavaScript, and modern web technologies, I thrive on solving complex problems through innovative solutions. 
My goal is to blend creativity with functionality, delivering websites that are not only visually stunning but also intuitive and performance-driven. 
Let's collaborate to bring your next digital project to life!
</p>
</section>

{/* Projects Section */}
<section className="projects">
<h2>Projects</h2>
<div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-badge" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p> Have a nice day !!</p>
      </footer>
    </div>
  );
};

export default App;