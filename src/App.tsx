import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("👀 Hey dev! Welcome to Meena’s digital corner.");
  }, []);

  return (
    <div className="App">
      <nav className="topbar">
      <a href="#" className="logo">
        Meena Al Hasani
      </a>
        <div className="nav-links">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#facts">Fun Facts</a>
          <a href="#contact">Contact Info</a>
        </div>
      </nav>

      <div className="container">
        <header>
          <h1>Hi, I’m Meena Al Hasani 👩‍💻</h1>
          <p>Software engineer in the making — design-focused, detail-driven, and slightly obsessed with sleek UIs.</p>
          <img src="/MeenaAlHasani.jpeg" alt="Meena Al Hasani" className="profile-pic" />
        </header>

        <section id="about">
          <h2>About Me</h2>
          <p>
            I’m a computer science student passionate about building clean, user-first web experiences. I love turning cool ideas into polished, functional interfaces using modern tools like React, TypeScript, and Tailwind.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Resume Website</strong> — The site you're on! Built with React + Vite to showcase my work and style.
            </li>
            <li>
              <strong>ZooDB</strong> — ASP.NET Core web app with Azure SQL backend. Role-based login and inventory tools.
            </li>
            <li>
              <strong>EventMatch</strong> — Volunteer-event matching system using Node.js + MySQL backend and JWT-auth frontend.
            </li>
          </ul>
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <p>
            <a href="/resume.pdf" download>Download My Resume</a>
          </p>
        </section>

        <section id="facts">
          <h2>Fun Facts</h2>
          <ul>
            <li>Houston-based</li>
            <li>Probably playing Mario Kart</li>
            <li>I love UI/UX as much as backend logic</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:meenaalhasani1@gmail.com">meenaalhasani1@gmail.com</a></p>
          <p>
            <a href="https://github.com/Meenaalhasani" target="_blank" rel="noreferrer">GitHub</a> |  
            <a href="https://linkedin.com/in/meenaalhasani" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
