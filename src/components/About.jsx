import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1>Hi, I'm <span className="highlight">John Doe</span></h1>
            <h2 className="subtitle">Full-Stack Developer</h2>
            <p className="description">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
            </p>
            <p className="description">
              With a strong foundation in React, Node.js, and various databases, I bring ideas to life 
              through clean, efficient code and thoughtful design.
            </p>
            
            <div className="skills-container">
              <h3>Technologies I work with:</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-name">React</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Node.js</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">CSS3</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">MongoDB</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Git</span>
                </div>
              </div>
            </div>

            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="var(--primary-color)" opacity="0.1"/>
                <circle cx="100" cy="75" r="25" fill="var(--primary-color)" opacity="0.3"/>
                <path d="M50 150 Q50 125 75 125 H125 Q150 125 150 150 V175 Q150 200 125 200 H75 Q50 200 50 175 V150 Z" fill="var(--primary-color)" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
