import React, { useState } from "react"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import ProductForm from "./components/ProductForm"
import AllProducts from "./components/AllProducts"
import ProductInfo from "./components/ProductInfo"
import UpdateProduct from "./components/UpdateProduct"


function App() {
  let [newProduct, setNewProduct] = useState(false)
  return (
    <BrowserRouter>
      <div className="App container w-50">
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path = "/">
            <ProductForm newProduct={newProduct} setNewProduct={setNewProduct}></ProductForm>
            <hr />
            <AllProducts newProduct={newProduct}></AllProducts>
          </Route>
          <Route exact path = "/products/:id">
            <ProductInfo></ProductInfo>
          </Route>
          <Route exact path = "/products/edit/:id">
            <UpdateProduct></UpdateProduct>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
