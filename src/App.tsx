//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Meena Al Hasani</h1>
        <p>Software Engineer</p>
      </header>

      <section id="About me">
          <h2>About Me</h2>
          <p>Fill later</p>
      </section>

      <section id="Projects">
        <h2>Projects</h2>
        <p>fill later</p>
      </section>

      <section id="Resume">
        <h2>Resume</h2>
        <a href="Meena Resume.pdf" download>Download PDF</a>
      </section>

      <section id="Contact">
        <h2>Contact</h2>
        <p>Email: meenaalhasani1@gmail.com</p>
        <p>
          <a href="https://linkedin.com/in/meenaalhasani">LinkedIn</a>
        </p>
      </section>
    </div>
  );
}

export default App
