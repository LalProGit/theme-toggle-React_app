import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "project1",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app with drag-and-drop functionality, real-time updates, and team collaboration features. Built with React and Firebase.",
      technologies: ["React", "Firebase", "CSS3", "JavaScript"],
      image: "project2",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and beautiful data visualizations using Chart.js.",
      technologies: ["React", "API Integration", "Chart.js", "CSS3"],
      image: "project3",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Here are some of my recent projects that showcase my skills and experience</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <svg width="100%" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="200" fill="var(--primary-color)" opacity="0.1"/>
                    <rect x="20" y="20" width="360" height="20" fill="var(--primary-color)" opacity="0.3"/>
                    <rect x="20" y="60" width="280" height="15" fill="var(--primary-color)" opacity="0.2"/>
                    <rect x="20" y="85" width="320" height="15" fill="var(--primary-color)" opacity="0.2"/>
                    <rect x="20" y="110" width="240" height="15" fill="var(--primary-color)" opacity="0.2"/>
                    <circle cx="320" cy="150" r="30" fill="var(--primary-color)" opacity="0.3"/>
                  </svg>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21V9M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19C4 20.5 4 16.5 2 16M22 19C22 19 18 20.5 18 16.5V15.5C18 14.5 18.5 14 18.5 14C18.5 14 20 14 20 12V10C20 8 19 7 17 7H15C13 7 12 8 12 10V12C12 14 13.5 14 13.5 14C13.5 14 14 14.5 14 15.5V16.5C14 20.5 10 19 10 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
