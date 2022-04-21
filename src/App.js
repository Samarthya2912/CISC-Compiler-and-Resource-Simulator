import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Editor from "./components/Editor";
import Memory from "./components/Memory";
import Navbar from "./components/Navbar";
import ResourceContextProvider from "./contexts/resources";
import Registers from "./components/Registers";
import CodeContextProvider from "./contexts/code";
import InputOutputContextProvider from "./contexts/io-interface-context";

function App() {
  return (
    <Router>
      <ResourceContextProvider>
        <CodeContextProvider>
          <InputOutputContextProvider>
            <Navbar />
            <div className="App">
              <Switch>
                <Route exact path="/">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      width: "100%",
                    }}
                  >
                    <Editor />
                  </div>
                </Route>
                <Route exact path="/memory">
                  <Registers />
                  <Memory />
                </Route>
                <h1>404 INVALID ROUTE</h1>
              </Switch>
            </div>
          </InputOutputContextProvider>
        </CodeContextProvider>
      </ResourceContextProvider>
    </Router>
  );
}

export default App;
