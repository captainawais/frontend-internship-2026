import "./Hero.css";
import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          🔥 Trending NFT Collection
        </span>

        <h1>
          Discover Rare
          <span> Digital Art </span>
          & Collect NFTs
        </h1>

        <p>
          Explore unique digital assets from top creators around
          the world. Buy, sell and collect exclusive NFTs.
        </p>

        <div className="hero-buttons">
          <button className="explore-btn">
            Explore Collection
          </button>

          <button className="create-btn">
            Create NFT
          </button>
        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <img
            src={heroImg}
            alt="NFT"
          />

          <div className="card-info">
            <h3>Cyber Monkey #001</h3>
            <p>Current Bid: 2.5 ETH</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;