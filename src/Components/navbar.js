import React from "react"
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="nav-list">
          <ul className="item">
            <li>
              <Link to="/" >Home </Link>
            </li>
            <li>
              <Link to="/fruits"  >Fruits</Link>
            </li>
            <li>
              <Link to="/vegetables"  >Vegetables</Link>
            </li>
            <li>
              <Link to="/help"  >Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar;