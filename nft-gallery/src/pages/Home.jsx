import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FilterBar from "../components/FilterBar";
import Featured from "../components/Featured";
import TopArtists from "../components/TopArtists";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

function Home() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  return (
    <>
      <Navbar />
      <Hero />

      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <Featured
        search={search}
        category={category}
        sort={sort}
      />

      <TopArtists />
      <Statistics />
      <Footer />
    </>
  );
}

export default Home;