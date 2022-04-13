import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Editor from "./components/Editor";
import Memory from "./components/Memory";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Editor />
          </Route>
          <Route exact path="/memory">
            <Memory />
          </Route>
          <h1>404 INVALID ROUTE</h1>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
