import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <h1>Where's The Frickin Train</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/union">Union Square-14th St</Link>
        <Link to="/times">times-square</Link>
        <Link to="/atlantic">atlantic-avenue</Link>
        <Link to="/fulton">fulton-street</Link>
      </nav>
    </header>
  );
}

export default Navbar;
