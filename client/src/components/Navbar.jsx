import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Post List</Link>
      {" | "}
      <Link to="/new">New Post</Link>
    </nav>
  );
}

export default Navbar;
