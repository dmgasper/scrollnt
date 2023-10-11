import { useState } from "react";

import "./App.css";
import Header from "./Header";
import Start from "./pages/Start";
import End from "./pages/End";
import Main from "./pages/Main";

const App = () => {
  const [page, setPage] = useState("Start");
  const [isExperimentGroup, setIsExperimentGroup] = useState("");

  return (
    <div className="App">
      <header className="App-header clipping-container">
        <Header page={page} setPage={setPage} />
      </header>
      <body id="App-Main" className="App-body">
        {page === "Main" && <Main isExperimentGroup={isExperimentGroup} />}
        {page === "Start" && (
          <Start
            setPage={setPage}
            setIsExperimentGroup={setIsExperimentGroup}
          />
        )}
        {page === "End" && <End />}
      </body>
    </div>
  );
};

export default App;
