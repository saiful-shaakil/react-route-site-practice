import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="mt-2 bg-success p-3">
      <Link className="btn  me-5" to="/">
        Home
      </Link>
      <Link className="btn  me-5" to="/posts">
        Posts
      </Link>
      <Link className="btn  me-5" to="/review">
        Review
      </Link>
    </nav>
  );
};

export default Header;
