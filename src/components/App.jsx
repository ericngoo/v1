import React from 'react'
import TopNavBar from './TopNavBar'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'
import Projects from './Projects'

function App() {
  return (
    <div>
      <TopNavBar />

      <Home />

      <About
        id="about" />

      <Experience
        id="experience" />

      <Projects
        id="projects" />

      <Contact 
        id="contact" />
    </div>
  );
}

export default App;
