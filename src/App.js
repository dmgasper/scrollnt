import { createContext, useState } from "react";

import "./App.css";
import Header from "./Header";
import Start from "./pages/Start";
import End from "./pages/End";
import Main from "./pages/Main";

const MouseTrackContext = createContext(null);

const App = () => {
  const [page, setPage] = useState("Start");
  const [isExperimentGroup, setIsExperimentGroup] = useState("");
  const [trackMouse, setTrackMouse] = useState(true);

  return (
    <MouseTrackContext.Provider value={trackMouse}>
      <div className="App">
        <header className="App-header clipping-container">
          <Header page={page} setPage={setPage} setTrackMouse={setTrackMouse} />
        </header>
        <body id="App-Main" className="App-body">
          {page === "Main" && (
            <Main
              isExperimentGroup={isExperimentGroup}
              setTrackMouse={setTrackMouse}
            />
          )}
          {page === "Start" && (
            <Start
              setPage={setPage}
              setIsExperimentGroup={setIsExperimentGroup}
            />
          )}
          {page === "End" && <End />}
        </body>
      </div>
    </MouseTrackContext.Provider>
  );
};

export { App, MouseTrackContext };
