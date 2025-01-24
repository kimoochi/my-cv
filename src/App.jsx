import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

// Import GIFs from /src/assets/
import webDevGif from "./assets/caphy.gif";
import uiUxGif from "./assets/caphyy.gif";
import reactGif from "./assets/caphyyy.gif";
import javascriptGif from "./assets/caphyyyy.gif";
import cssHtmlGif from "./assets/caphyyyyy.gif";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");

  const skills = [
    { name: "Web Development", gif: webDevGif, color: "#6a11cb" },
    { name: "UI/UX Design", gif: uiUxGif, color: "#2575fc" },
    { name: "React.js", gif: reactGif, color: "#ff6f61" },
    { name: "JavaScript", gif: javascriptGif, color: "#ffd166" },
    { name: "CSS & HTML", gif: cssHtmlGif, color: "#06d6a0" },
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Footer Component
  const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <div className="footer-content">
            <p>&copy; 2023 My Portfolio. All rights reserved.</p>
            <div className="social-links">
              <a href="https://x.com/kim48682357" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="https://www.linkedin.com/in/kimmy-chan-3983aa2b2/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/kimoochi" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <Link to="/skills" className="footer-link">
              Explore My Skills
            </Link>
          </div>
        </Container>
      </footer>
    );
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="light" expand="lg" className="navbar-custom">
          <Container>
            <Navbar.Brand as={Link} to="/">
              LOGO
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/skills">
                  Skills
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Header Section with Animation */}
                <header className="header-section">
                  <div className="header-content">
                    <h1>Welcome to my Portfolio</h1>
                    <h2>Hi, I'm webdecoded</h2>
                    <div className="animated-circle"></div>
                    <div className="animated-circle delay-1"></div>
                    <div className="animated-circle delay-2"></div>
                  </div>
                </header>

                {/* Content Section */}
                <section className="content-section">
                  <Container>
                    <h3>Web Design</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <Button variant="primary" className="connect-button">
                      Let's connect
                    </Button>
                  </Container>
                </section>

                {/* Footer */}
                <Footer />
              </>
            }
          />
          <Route
            path="/skills"
            element={
              <>
                {/* Skills Section */}
                <section className="skills-section">
                  <Container>
                    <h2>Skills</h2>
                    <p>Here are some of the skills I specialize in:</p>
                    <div className="skills-grid">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="skill-card"
                          style={{ background: skill.color }}
                          onClick={() => handleSkillClick(skill)}
                        >
                          <img src={skill.gif} alt={skill.name} />
                          <h3>{skill.name}</h3>
                        </div>
                      ))}
                    </div>
                  </Container>

                  {/* Popup for Skill Details */}
                  {showPopup && (
                    <div className="popup-overlay">
                      <div
                        className="popup-content"
                        style={{ background: selectedSkill.color }}
                      >
                        <h3>{selectedSkill.name}</h3>
                        <img src={selectedSkill.gif} alt={selectedSkill.name} />
                        <p>More details about {selectedSkill.name}...</p>
                        <Button variant="primary" onClick={closePopup}>
                          Close
                        </Button>
                      </div>
                    </div>
                  )}
                </section>

                {/* Footer */}
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;