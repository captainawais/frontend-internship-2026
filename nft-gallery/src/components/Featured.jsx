import NFTCard from "./NFTCard";
import nftData from "../data/nftData";
import "./Featured.css";

function Featured({ search, category, sort }) {

  let filteredNFTs = [...nftData];

  // Search
  filteredNFTs = filteredNFTs.filter((nft) =>
    nft.name.toLowerCase().includes(search.toLowerCase()) ||
    nft.artist.toLowerCase().includes(search.toLowerCase())
  );

  // Category
  if (category !== "All") {
    filteredNFTs = filteredNFTs.filter(
      (nft) => nft.category === category
    );
  }

  // Sort
  if (sort === "low") {
    filteredNFTs.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
  }

  if (sort === "high") {
    filteredNFTs.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
  }

  return (
    <section className="featured">

      <div className="section-header">
        <h2>Featured NFTs</h2>
        <p>Explore our most popular digital collectibles</p>
      </div>

      <div className="featured-grid">

        {filteredNFTs.length > 0 ? (
          filteredNFTs.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))
        ) : (
          <h3>No NFT Found</h3>
        )}

      </div>

    </section>
  );
}

export default Featured;