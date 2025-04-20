import React from "react";
import { Link } from "react-router-dom";
// Home Component (Hero Section)
function Home() {
  return (
    <section 
      className="hero"
      id="home"

    >
      <h1>Welcome to Cafe 24</h1>
      <p>Delicious food delivered fresh to your table</p>
      <Link to="/menu" className="btn">Explore Menu</Link>
    </section>
  );
}

export default Home;
