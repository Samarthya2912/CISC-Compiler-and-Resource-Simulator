import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Editor from "./components/Editor";
import Memory from "./components/Memory";
import Navbar from "./components/Navbar";
import ResourceContextProvider from "./contexts/resources";
import Registers from "./components/Registers";
import CodeContextProvider from "./contexts/code";
import InputOutputContextProvider from "./contexts/io-interface-context";
import EditorContextProvider from "./contexts/editor";
import RunningModeContextProvider from "./contexts/running_mode";
import DebugStateContextProvider from "./contexts/debug-state";
import IntroPage from "./components/IntroPage";
import { useState } from "react";

function App() {
  const [introVisibility,setIntroVisibility] = useState(true);

  return (
    <Router>
      <ResourceContextProvider>
        <CodeContextProvider>
          <InputOutputContextProvider>
            <EditorContextProvider>
              <RunningModeContextProvider>
                <DebugStateContextProvider>
                  {introVisibility && <IntroPage setIntroVisibility={setIntroVisibility} />}
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
                          <Registers />
                          <Memory />
                        </div>
                      </Route>
                      <Route exact path="/memory"></Route>
                      <h1>404 INVALID ROUTE</h1>
                    </Switch>
                  </div>
                </DebugStateContextProvider>
              </RunningModeContextProvider>
            </EditorContextProvider>
          </InputOutputContextProvider>
        </CodeContextProvider>
      </ResourceContextProvider>
    </Router>
  );
}

export default App;
