import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Products() {
  return (
    <section>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/p2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/p3">Product 3</Link>
        </li>
      </ul>
    </section>
  );
}

export default Products;
