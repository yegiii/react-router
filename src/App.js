import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDeatils from "./pages/ProductDeatils";

function App() {
  return (
    <div>
      <MainHeader />

      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDeatils />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
