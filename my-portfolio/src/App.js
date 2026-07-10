import React from 'react';
import './App.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaPhoneAlt, FaFacebook } from 'react-icons/fa';

function App() {
  // ලින්ක් එක ක්ලික් කරාම ඒ කොටසට ලස්සනට Scroll වෙන්න හදපු Function එක
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">
      {/* --- FLOATING NAVBAR --- */}
      <nav className="navbar">
        <div className="logo">OSHAN.site</div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('home')} className="nav-btn">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-btn">About</button>
          <button onClick={() => scrollToSection('experience')} className="nav-btn">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="nav-btn">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="nav-btn">Contact</button>
        </div>
      </nav>

      {/* --- HERO HEADER SECTION --- */}
      <header id="home" className="header">
        <img src="/my-profile.png" alt="Oshan Helinda" className="profile-pic" /> 
        <h1>Oshan Helinda </h1>
        <p>Software Engineering Undergraduate</p>
        
        <a href="/Oshan_CV.pdf" download="Oshan_CV.pdf" className="download-btn">
          Download CV 📄
        </a>
      </header>

      {/* --- ABOUT ME SECTION --- */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate 3rd-year Software Engineering Honors student at NSBM Green University. Over the past few years, I have driven my focus into crafting full-stack software solutions using modern technologies like Flutter, React.js, and Java Spring Boot. Alongside software development, I have built a solid foundation in Quality Assurance (QA) Engineering, exploring software testing life cycles and defect reporting to ensure high-quality code delivery.
        </p>
      </section>

      {/* --- EDUCATION & QUALIFICATIONS SECTION --- */}
      <section className="section">
        <h2>Education & Qualifications</h2>
        <div className="experience-item">
          <h3>BSc (Hons) in Software Engineering</h3>
          <p className="company">NSBM Green University — Following (3rd Year)</p>
        </div>
        <div className="experience-item" style={{ marginTop: '20px' }}>
          <h3>ICTT (NVQ Level 04)</h3>
          <p className="company">National Youth Services Council (NYSC) — Completed</p>
        </div>
        <div className="experience-item" style={{ marginTop: '20px' }}>
          <h3>Certificate Course in Spoken English (Level 1)</h3>
          <p className="company">Institute of Human Resource Advancement (IHRA), University of Colombo — Completed</p>
        </div>
      </section>

      {/* --- WORK EXPERIENCE SECTION --- */}
      <section id="experience" className="section">
        <h2>Work Experience</h2>
        <div className="experience-item">
          <h3>IT Coordinator</h3>
          <p className="company">People's Bank | 6-Month Tenure</p>
          <p style={{ marginTop: '5px' }}>Assisted in IT operations, coordinated system tasks, and supported tech infrastructure development.</p>
        </div>
      </section>

      {/* --- EXTENSION & LEADERSHIP ACTIVITIES SECTION --- */}
      <section className="section">
        <h2>Extension & Leadership Activities</h2>
        <div className="experience-item">
          <h3>Head Prefect</h3>
          <p className="company">Gungamuwa K.V (2017 - 2018)</p>
        </div>
        <div className="experience-item" style={{ marginTop: '20px' }}>
          <h3>Chairman</h3>
          <p className="company">Buddhist Association — Gungamuwa K.V (2018)</p>
        </div>
        <div className="experience-item" style={{ marginTop: '20px' }}>
          <h3>Member</h3>
          <p className="company">Commerce Society — Bandaragama National College (2020)</p>
        </div>
      </section>

      {/* --- TECHNICAL SKILLS SECTION --- */}
<section className="section">
  <h2 style={{ color: '#14b8a6', fontFamily: "'Space Grotesk', sans-serif" }}>SKILLS</h2>
  <div className="skills-container">
    
    <div className="skill-bar-wrapper">
      <div className="skill-info">
        <span>Flutter / Mobile App Dev</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '55%' }}></div>
      </div>
    </div>

    <div className="skill-bar-wrapper">
      <div className="skill-info">
        <span>HTML/CSS</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '80%' }}></div>
      </div>
    </div>

    <div className="skill-bar-wrapper">
      <div className="skill-info">
        <span>React.js / Frontend Dev</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '75%' }}></div>
      </div>
    </div>

    <div className="skill-bar-wrapper">
      <div className="skill-info">
        <span>QA Methodologies & Testing</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '60%' }}></div>
      </div>
    </div>

    <div className="skill-bar-wrapper">
      <div className="skill-info">
        <span>Node.js / Backend Dev</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '75%' }}></div>
      </div>
    </div>

  </div>
</section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Indoor Cricket Stadium System</h3>
            <p>An online hourly slot booking and management system tailored for indoor softball cricket stadiums.</p>
            <p>GitHub Repositories: <a href="https://github.com/bwohelinda/Ground-booking-system.git" target="_blank" rel="noreferrer">Ground-booking-system.git</a></p>
          </div>
        </div>
      </section>

<footer id="contact" className="footer">
  <h2>Contact Me</h2>
  
  
  <div className="contact-grid">
    <a href="tel:+94707447702" className="contact-item">
      <FaPhoneAlt className="icon phone-icon" />
      <div className="contact-text">
        <span>Mobile Phone</span>
        <p>0707447702</p>
      </div>
    </a>

    <a href="https://wa.me/0778345500_blank" rel="noreferrer" className="contact-item">
      <FaWhatsapp className="icon whatsapp-icon" />
      <div className="contact-text">
        <span>WhatsApp</span>
        <p>0778345500</p>
      </div>
    </a>
   
    <a href="mailto:oshanhelinda8@gmail.com" className="contact-item">
      <FaEnvelope className="icon email-icon" />
      <div className="contact-text">
        <span>Email</span>
        <p>oshanhelinda8@gmail.com</p>
      </div>
    </a>

    <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="contact-item">
      <FaGithub className="icon github-icon" />
      <div className="contact-text">
        <span>GitHub</span>
        <p>github.com/bwohelinda</p>
      </div>
    </a>

    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="contact-item">
      <FaLinkedin className="icon linkedin-icon" />
      <div className="contact-text">
        <span>LinkedIn</span>
        <p>linkedin.com/Oshan Helinda</p >
      </div>
    </a>

    <a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer" className="contact-item">
      <FaFacebook className="icon facebook-icon" />
      <div className="contact-text">
        <span>Facebook</span>
        <p>facebook.com/Oshan Helinda</p>
      </div>
    </a>
  </div>
</footer>
    </div>
  );
}

export default App;