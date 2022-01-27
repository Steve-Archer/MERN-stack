import React from "react"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import ProductForm from "./components/ProductForm"
import AllProducts from "./components/AllProducts"
import ProductInfo from "./components/ProductInfo"


function App() {
  return (
    <BrowserRouter>
      <div className="App container w-50">
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path = "/">
            <ProductForm></ProductForm>
            <hr />
            <AllProducts></AllProducts>
          </Route>
          <Route exact path = "/products/:id">
            <ProductInfo></ProductInfo>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
