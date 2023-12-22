import { Component } from "react";

class MyNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/">
            <img
              src="./assets/netflix_logo.png"
              alt="Logo"
              id="logo"
              className="d-inline-block align-text-top"
              style={{ width: "8em" }}
            />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
              <li className="nav-item">
                <a href="/" className="nav-link" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/tv-shows" className="nav-link">
                  TV shows
                </a>
              </li>
              <li className="nav-item">
                <a href="/movies" className="nav-link">
                  <b>Movies</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="/recently-added" className="nav-link">
                  Recently Added
                </a>
              </li>
              <li className="nav-item">
                <a href="/my-list" className="nav-link">
                  My List
                </a>
              </li>
            </ul>
            <div className="d-flex my-2 my-lg-0 ">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0 d-flex flex-row align-items-center">
                <li className="nav-item">
                <i className="bi bi-search icons" style={{ color: "#ffffff" }}></i>
                 
                </li>
                <li className="nav-item">
                  <a href="/kids" className="nav-link">
                    Kids
                  </a>
                </li>
                <li className="nav-item">
                <i className="bi bi-bell icons " style={{ color: "#ffffff" }}></i>
                  
                </li>
                <li className="nav-item">
                  <a href="/profile">
                    <img
                      src="./assets/avatar.png"
                      alt="profile"
                      id="profile"
                      className="d-inline-block align-text-top"
                      style={{ width: "3em", paddingInline: "0.5em" }}
                    />
                  </a>
                </li>
                <i className="fa-solid fa-caret-down arrow" ></i>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default MyNav;
