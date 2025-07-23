import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
    <div className="App">
      <header style={styles.header}>
        <h1>Chithraka Kalanamith</h1>
        <p>Full Stack Developer | React | Node.js</p>
      </header>

      <AboutMe />

      <section style={styles.section}>
        <h2>Projects</h2>
        <div style={styles.cardContainer}>
          <ProjectCard 
            title="My Portfolio" 
            description="A personal portfolio to showcase my work."
          />
          <ProjectCard 
            title="Todo App" 
            description="A simple task management tool built with React." 
          />
          <ProjectCard 
            title="Game Demo" 
            description="A mini platformer game using HTML5 canvas." 
          />
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2025 WACK Wickramasinghe</p>
      </footer>
    </div>
    </>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#222',
    color: 'white',
    padding: '2rem',
  },
  section: {
    padding: '2rem',
  },
  cardContainer: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    borderRadius: '8px',
    flex: '1 0 30%',
  },
  footer: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#222',
    color: 'white',
  }
};

export default App;
