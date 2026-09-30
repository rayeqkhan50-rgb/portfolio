import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  // Contact form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Success / error message
  const [formMessage, setFormMessage] = useState("");

  const changePage = (page) => {
    setActivePage(page);
    setFormMessage("");
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit contact form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormMessage("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setFormMessage("✅ Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setFormMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setFormMessage(
        "❌ Unable to connect to server. Please try again."
      );
    }
  };

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">MyPortfolio</div>

        <div className="nav-links">
          <button
            className={activePage === "home" ? "active" : ""}
            onClick={() => changePage("home")}
          >
            Home
          </button>

          <button
            className={activePage === "about" ? "active" : ""}
            onClick={() => changePage("about")}
          >
            About
          </button>

          <button
            className={activePage === "skills" ? "active" : ""}
            onClick={() => changePage("skills")}
          >
            Skills
          </button>

          <button
            className={activePage === "projects" ? "active" : ""}
            onClick={() => changePage("projects")}
          >
            Projects
          </button>

          <button
            className={activePage === "resume" ? "active" : ""}
            onClick={() => changePage("resume")}
          >
            Resume
          </button>

          <button
            className={activePage === "contact" ? "active" : ""}
            onClick={() => changePage("contact")}
          >
            Contact
          </button>
        </div>
      </nav>


      {/* ================= HOME ================= */}
      {activePage === "home" && (
        <section className="page home">
          <div className="home-content">
            <p className="welcome">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Your Name</span>
            </h1>

            <h2>Frontend Developer & B.Tech Student</h2>

            <p className="intro">
              I am a passionate web developer interested in creating
              modern, responsive and user-friendly websites using
              modern web technologies.
            </p>

            <div className="home-buttons">
              <button
                className="btn primary-btn"
                onClick={() => changePage("projects")}
              >
                View My Projects
              </button>

              <button
                className="btn secondary-btn"
                onClick={() => changePage("contact")}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="home-image">
            <div className="profile-circle">👨‍💻</div>
          </div>
        </section>
      )}


      {/* ================= ABOUT ================= */}
      {activePage === "about" && (
        <section className="page about-section">

          <div className="section-heading">
            <p>GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>

          <div className="about-container">

            <div className="about-text">
              <h3>I'm a passionate Web Developer</h3>

              <p>
                Hello! I am a B.Tech student with a strong interest
                in web development and software technologies.
                I enjoy learning new technologies and creating
                useful and attractive websites.
              </p>

              <p>
                My goal is to improve my technical skills by working
                on real-world projects and developing applications
                that provide a good user experience.
              </p>

              <div className="about-info">

                <div>
                  <strong>Education</strong>
                  <span>B.Tech</span>
                </div>

                <div>
                  <strong>Role</strong>
                  <span>Student / Developer</span>
                </div>

                <div>
                  <strong>Focus</strong>
                  <span>Web Development</span>
                </div>

              </div>
            </div>


            <div className="education-card">

              <div className="education-icon">🎓</div>

              <h3>Bachelor of Technology</h3>

              <p>Computer Science / Engineering</p>

              <span>2022 - 2026</span>

            </div>

          </div>

        </section>
      )}


      {/* ================= SKILLS ================= */}
      {activePage === "skills" && (
        <section className="page skills-section">

          <div className="section-heading">
            <p>MY TECHNICAL KNOWLEDGE</p>
            <h2>My Skills</h2>
          </div>

          <div className="skills-container">

            <div className="skill-card">
              <h3>HTML</h3>
              <p>90%</p>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div className="skill-card">
              <h3>CSS</h3>
              <p>85%</p>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div className="skill-card">
              <h3>JavaScript</h3>
              <p>80%</p>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div className="skill-card">
              <h3>React</h3>
              <p>75%</p>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="skill-card">
              <h3>Python</h3>
              <p>75%</p>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="skill-card">
              <h3>Git & GitHub</h3>
              <p>70%</p>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

          </div>

        </section>
      )}


      {/* ================= PROJECTS ================= */}
{activePage === "projects" && (
  <section className="page projects-section">

    <div className="section-heading">
      <p>MY RECENT WORK</p>
      <h2>My Projects</h2>
    </div>

    <div className="projects-container">

      {/* ================= MINDSYNC ================= */}
      <div className="project-card">

        <div className="project-image">
          🧠
        </div>

        <h3>MindSync</h3>

        <p>
          AI-powered digital mental wellness platform
          designed to support students with mental wellness
          and self-care.
        </p>

        <div className="project-tech">
          HTML • CSS • JavaScript • Flask
        </div>

        <div className="project-buttons">

          <button
            className="project-btn"
            onClick={() => alert("MindSync Live Demo will be added soon.")}
          >
            Live Demo
          </button>

          <button
            className="project-btn"
            onClick={() => alert("MindSync GitHub link will be added soon.")}
          >
            GitHub
          </button>

        </div>

      </div>


      {/* ================= SALES DASHBOARD ================= */}
      <div className="project-card">

        <div className="project-image">
          📊
        </div>

        <h3>Sales Dashboard</h3>

        <p>
          Business dashboard for analyzing sales, profit,
          categories and overall business performance.
        </p>

        <div className="project-tech">
          Excel • Power BI • DAX
        </div>

        <div className="project-buttons">

          <button
            className="project-btn"
            onClick={() => alert("Sales Dashboard project will be added soon.")}
          >
            View Project
          </button>

          <button
            className="project-btn"
            onClick={() => alert("Sales Dashboard GitHub link will be added soon.")}
          >
            GitHub
          </button>

        </div>

      </div>


      {/* ================= PERSONAL PORTFOLIO ================= */}
      <div className="project-card">

        <div className="project-image">
          💻
        </div>

        <h3>Personal Portfolio</h3>

        <p>
          Responsive personal portfolio website showcasing
          my skills, projects, resume and contact information.
        </p>

        <div className="project-tech">
          React • CSS • JavaScript
        </div>

        <div className="project-buttons">

          <button
            className="project-btn"
            onClick={() => window.open("http://localhost:5173", "_blank")}
          >
            Live Demo
          </button>

          <button
            className="project-btn"
            onClick={() =>
              window.open(
                "https://github.com/rayeqkhan50-rgb/portfolio",
                "_blank"
              )
            }
          >
            GitHub
          </button>

        </div>

      </div>

    </div>

  </section>
)}

      {/* ================= RESUME ================= */}
      {activePage === "resume" && (
        <section className="page resume-section">

          <div className="section-heading">
            <p>MY PROFESSIONAL PROFILE</p>
            <h2>My Resume</h2>
          </div>

          <div className="resume-container">

            <div className="resume-info">

              <h3>B.Tech Student & Web Developer</h3>

              <p>
                I am a passionate technology student interested
                in web development, programming and software
                development.
              </p>

              <div className="resume-item">
                <strong>🎓 Education</strong>
                <span>
                  Bachelor of Technology
                  <br />
                  Computer Science / Engineering
                  <br />
                  2022 - 2026
                </span>
              </div>

              <div className="resume-item">
                <strong>💻 Experience</strong>
                <span>
                  Web Development Projects
                  <br />
                  HTML, CSS, JavaScript, React & Python
                </span>
              </div>

              <div className="resume-item">
                <strong>🎯 Career Goal</strong>
                <span>
                  Software / Web Developer
                </span>
              </div>

              <a
                href="/resume.pdf"
                download
                className="download-btn"
              >
                ⬇️ Download Resume
              </a>

            </div>


            <div className="resume-card">

              <div className="resume-card-icon">
                📄
              </div>

              <h3>My Resume</h3>

              <p>
                Download my complete resume to know more
                about my education, skills and projects.
              </p>

              <div className="resume-details">
                <p>💻 Skills: Web Development</p>
                <p>🎓 Education: B.Tech</p>
                <p>🚀 Projects: Multiple Projects</p>
              </div>

            </div>

          </div>

        </section>
      )}


      {/* ================= CONTACT ================= */}
      {activePage === "contact" && (
        <section className="page contact-section">

          <div className="section-heading">
            <p>GET IN TOUCH</p>
            <h2>Contact Me</h2>
          </div>

          <div className="contact-container">

            <div className="contact-info">

              <h3>Let's Talk</h3>

              <p>
                If you have any questions, project ideas or
                opportunities, feel free to contact me.
                I would be happy to hear from you.
              </p>

              <div className="contact-detail">
                📧
                <span>
                  <strong>Email</strong>
                  yourname@gmail.com
                </span>
              </div>

              <div className="contact-detail">
                📱
                <span>
                  <strong>Phone</strong>
                  +91 XXXXXXXXXX
                </span>
              </div>

              <div className="contact-detail">
                📍
                <span>
                  <strong>Location</strong>
                  India
                </span>
              </div>

            </div>


            {/* CONTACT FORM */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="send-btn"
              >
                Send Message
              </button>

              {/* Form response */}
              {formMessage && (
                <p className="form-message">
                  {formMessage}
                </p>
              )}

            </form>

          </div>

        </section>
      )}

    </div>
  );
}

export default App;