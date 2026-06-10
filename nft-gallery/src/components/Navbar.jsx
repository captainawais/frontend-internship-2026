import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">NFT Gallery</div>

      <div className="nav-links">
        <a href="./">Home</a>
        <a href="./Explore">Explore</a>
        <a href="./Artists">Artists</a>
        <a href="./Contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;