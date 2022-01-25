import ProductForm from "./components/ProductForm"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path = "/">
            <ProductForm></ProductForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
