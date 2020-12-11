import React from "react";

export default function Search() {
  return (
    <div className="search-bar">
      <form className="search-form">
        <div className="row">
          <div className="col-12 col-md-8 mb-2 mb-md-0">
            <input
              type="text"
              placeholder="Enter a city..."
              autoFocus="on"
              autoComplete="off"
              className="form-control shadow-sm"
              id="search-input"
            />
          </div>
          <div className="col-4 col-md-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-secondary btn-sm"
            />
          </div>
          <div className="col-4 col-md-2">
            <button
              type="submit"
              className="btn btn-outline-secondary btn-sm"
              id="current-location"
            >
              <span role="img" aria-label="location-pin">
                📍
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

