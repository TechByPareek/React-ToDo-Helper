import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    // 💡 Navbar wrapper with custom gradient background (improved look)
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container-fluid">

        {/* --- Brand Logo/Title --- */}
        <Link className="navbar-brand fw-bold text-glow" to="/">
          {props.title}
        </Link>

        {/* --- Toggler button for mobile view --- */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* --- Collapsible navbar content --- */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* --- Navigation Links Section --- */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* --- Existing Links --- */}
            <li className="nav-item">
              <Link className="nav-link active nav-link-hover" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/about">
                About
              </Link>
            </li>

            {/* --- 🆕 Added New Useful Links --- */}
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/features">
                Features
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/contact">
                Contact
              </Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/profile">
                Profile
              </Link>
            </li>
          </ul>

          {/* --- Optional Search Bar (from your original code) --- */}
          {props.searchBar ? (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-info" type="submit">
                Search
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

// --- Default props (your original comment preserved)
Header.defaultProps = {
  title: "Your Title here",
  searchBar: true,
};

// --- Prop types validation (your original comment preserved)
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};
