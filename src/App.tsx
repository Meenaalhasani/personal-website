import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const canvas = document.getElementById("bg-canvas") as HTMLCanvasElement | null;
    if (!canvas) return;
  
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5,
      size: Math.random() * 2 + 1,
    }));
  
    const mouse = { x: 0, y: 0 };
  
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
  
        // If mouse is within 100px, apply repulsion
        if (dist < 100 && dist > 0) {
          const force = 1 - dist / 100;
          p.dx += (dx / dist) * force * 0.5;
          p.dy += (dy / dist) * force * 0.5;
        }
  
        p.x += p.dx;
        p.y += p.dy;
  
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();
      }
  
      requestAnimationFrame(animate);
    };
  
    animate();
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
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
      <canvas id="bg-canvas" className="bg-canvas"></canvas>
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
            <a href="/MeenaResume.pdf" download type="application/pdf">Download My Resume</a>
          </p>
        </section>

        <section id="facts">
          <h2>Fun Facts</h2>
          <ul>
            <li>Iraqi born, raised in Egypt, based in Houston</li>
            <li>Probably playing Roblox</li>
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
