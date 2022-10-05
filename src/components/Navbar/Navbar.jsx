import React from "react";
import "./Navbar.css";
import { IoMailOpen } from "react-icons/io5";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <IoMailOpen color="#6e66ec" /> Eastery
        </a>

        <div
          className="collapse navbar-collapse nav-inner"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Rent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Buy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sell
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Manage Property
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resources
              </a>
            </li>
          </ul>

          <div>
            <button
              className="btn nav-btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Login
            </button>
            <button type="button" className="btn nav-btn btn-primary">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
