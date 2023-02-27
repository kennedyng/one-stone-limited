import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-primary sticky-top  fw-bolder ">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand text-white mx-auto display-6">
            ONE STONE LIMITED
          </a>
        </Link>
        <button
          className="navbar-toggler border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list text-white display-6"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
            <li className="nav-item ">
              <Link href="/">
                <a className="nav-link text-white" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact">
                <a className="nav-link text-white" aria-current="page">
                  Contact
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link text-white" aria-current="page">
                  About us
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link href="#service">
                <a
                  className="nav-link dropdown-toggle text-white"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
              </Link>
              <ul className="dropdown-menu border-primary">
                <li>
                  <Link href="#diagnosis">
                    <a className="dropdown-item border-bottom">
                      Professional Car diagnosis
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#engine">
                    <a className="dropdown-item border-bottom">Engine Repair</a>
                  </Link>
                </li>
                <li>
                  <Link href="#suspension">
                    <a className="dropdown-item border-bottom">
                      Suspension Repair
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
