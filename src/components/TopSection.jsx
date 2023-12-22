import { Component } from "react";

const TopSection = () => {
  return (
    
      <div className="container-fluid  d-flex align-items-center justify-content-between  p-0 pb-2 text-light">
        <div className="d-flex align-items-center">
          <h2 className="">Movies</h2>
          <div className="dropdown">
            <button
              className="btn btn-black text-light dropdown-toggle ms-3 border border-1 button-custom"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Comedies
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sci-fi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="me-5">
        <i className="bi bi-grid icons border px-3 py-1"></i>
        <i className="bi bi-grid-3x3 icons border px-3 py-1"></i>
        </div>
      </div>
    
  );
};

export default TopSection;
