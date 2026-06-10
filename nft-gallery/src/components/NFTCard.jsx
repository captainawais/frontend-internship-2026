import "./NFTCard.css";

function NFTCard({ nft }) {
  return (
    <div className="nft-card">

      <img src={nft.image} alt={nft.name} />

      <div className="card-content">

        <h3>{nft.name}</h3>

        <p className="artist">
          👨‍🎨 {nft.artist}
        </p>

        <div className="card-bottom">

          <span className="price">
            {nft.price} ETH
          </span>

          <button>
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default NFTCard;