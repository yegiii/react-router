import React from "react";
import { Link } from "react-router-dom";

import Classes from "./mainHeader.module.css";

function MainHeader() {
  return (
    <header className={Classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
