import React from "react";
import Sidenav from './sidenav'

function Header() {

  return (
    <div className="Header">

      <nav>
        <div className="nav-wrapper red lighten-3">
          <a href="#!" className="brand-logo center">Logo</a>

          <ul className="right ">
            <li className="no-padding"></li>
            <li><a href="#!">Kontakt</a></li>
            <li><a href="#!">Impressum</a></li>
            <li ><Sidenav /></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
