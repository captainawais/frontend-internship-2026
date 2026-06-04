import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
       Awais Portfolio
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <button className="resume-btn">
        Download Resume
      </button>

    </nav>
  )
}

export default Navbar