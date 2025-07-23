function Projects() {
    return (
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
    );
}

function ProjectCard({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
export default Projects;