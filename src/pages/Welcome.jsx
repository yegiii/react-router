import React from "react";
import { Route } from "react-router-dom";

function Welcome() {
  return (
    <section>
      <h1>Welcome page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome,new user.</p>
      </Route>
    </section>
  );
}

export default Welcome;
