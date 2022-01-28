import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Authors from "./components/Authors"
import NewAuthor from "./components/NewAuthor"
import UpdateAuthor from "./components/UpdateAuthor"



function App() {
  return (
    <BrowserRouter>
      <div className="App container w-50">
        <h1>Favorite Author</h1>
        <Switch>
          <Route exact path= "/">
            <Authors></Authors>
          </Route>
          <Route exact path = "/new">
            <NewAuthor></NewAuthor>
          </Route>
          <Route exact path= "/edit/:id">
            <UpdateAuthor></UpdateAuthor>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
