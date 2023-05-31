import React, { Fragment } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function ProductDeatils() {
  const params = useParams();

  return (
    <Fragment>
      <h1>ProductDeatils</h1>
      <p>{params.productId}</p>
    </Fragment>
  );
}

export default ProductDeatils;
