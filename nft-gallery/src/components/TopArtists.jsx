import "./TopArtists.css";

function TopArtists() {
  const artists = [
    {
      name: "Awais Studio",
      sales: "120 ETH",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Crypto King",
      sales: "98 ETH",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "NFT Master",
      sales: "87 ETH",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Digital Artist",
      sales: "75 ETH",
      image: "https://i.pravatar.cc/150?img=4",
    },
  ];

  return (
    <section className="artists">
      <h2>👑 Top Artists</h2>

      <div className="artists-grid">
        {artists.map((artist, index) => (
          <div className="artist-card" key={index}>
            <img src={artist.image} alt={artist.name} />
            <h3>{artist.name}</h3>
            <p>{artist.sales} Sales</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopArtists;