import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Form></Form>
        <Switch>
          <Route exact path="/:input/:num">
            <Content></Content>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;