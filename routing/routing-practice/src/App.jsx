import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TextAndColors from './components/TextAndColors';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/:text/">
            <TextAndColors></TextAndColors>
          </Route>
          <Route exact path="/:text/:color/:backgroundColor">
            <TextAndColors></TextAndColors>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;