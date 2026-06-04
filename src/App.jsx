import { useState, useEffect } from "react"

import Navbar from "./components/Navbar/Navbar"
import Alert from "./components/Alert/Alert"
import Badge from "./components/Badge/Badge"
import Button from "./components/Button/Button"
import Card from "./components/Card/Card"
import Input from "./components/Input/Input"
import Loader from "./components/Loader/Loader"
import Modal from "./components/Modal/Modal"

import "./App.css"

function App() {

  const [loading, setLoading] = useState(true)

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)

  }, [])

  if (loading) {
    return <Loader />
  }

  return (

    <div className="container">

      {/* NAVBAR */}

      <Navbar />

      {/* HERO */}

      <section className="hero">

        <div className="hero-left">

          <h1>
            Hi, I'm <span>Awais</span>
          </h1>

          <p>
            Frontend Developer passionate about building
            modern web applications using React.js,
            JavaScript and reusable UI components.
          </p>

          <div className="hero-buttons">

            <Button text="Download Resume" />

            <Button
              text="View Internship"
              onClick={() => setShowModal(true)}
            />

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-image">

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
              alt="Developer"
            />

          </div>

        </div>

      </section>

      {/* ALERT */}

      <Alert
        message="Frontend Developer Internship Program Active"
      />

      {/* ABOUT */}

      <section className="section">

        <h2>About Me</h2>

        <div className="about">

          <div className="about-card">

            <p>
              I am a Frontend Developer who enjoys
              creating responsive and user-friendly
              interfaces using React.js and modern
              web technologies.
            </p>

          </div>

          <div className="about-card">

            <p>
              Currently enrolled in a Frontend
              Developer Internship Program and
              continuously improving my development
              skills through practical projects.
            </p>

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section className="section">

        <h2>Technical Skills</h2>

        <div className="badges">

          <Badge text="React.js" />
          <Badge text="JavaScript" />
          <Badge text="HTML5" />
          <Badge text="CSS3" />
          <Badge text="GitHub" />
          <Badge text="Responsive Design" />
          <Badge text="Frontend Development" />

        </div>

      </section>

      {/* PROJECTS */}

      <section className="section">

        <h2>Featured Projects</h2>

        <div className="projects">

          <Card
            title="Dynamic Profile Cards"
            description="React Props, State Management, Search Functionality and UI Design."
          />

          <Card
            title="Dice Game"
            description="Interactive JavaScript game with random number generation."
          />

          <Card
            title="ATM Simulation"
            description="Banking system simulation using JavaScript logic."
          />

          <Card
            title="To Do Application"
            description="Task management application with CRUD operations."
          />

        </div>

      </section>

      {/* CONTACT */}

      <section className="section">

        <h2>Contact Me</h2>

        <div className="contact">

          <Input placeholder="Enter Your Name" />

          <Input placeholder="Enter Your Email" />

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <p>
          © 2026 Awais Farooq | React Components Portfolio
        </p>

      </footer>

      {/* MODAL */}

      {showModal && (
        <Modal
          closeModal={() => setShowModal(false)}
        />
      )}

    </div>

  )

}

export default App