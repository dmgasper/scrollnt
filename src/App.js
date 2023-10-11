import { useState } from "react";

import "./App.css";
import Start from "./pages/Start";
import Main from "./pages/Main";

const App = () => {
  const [page, setPage] = useState("Start");
  const [isExperimentGroup, setIsExperimentGroup] = useState("");

  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="App-body">
        {page === "Main" && (
          <Main
            page={page}
            setPage={setPage}
            isExperimentGroup={isExperimentGroup}
          />
        )}
        {page === "Start" && (
          <Start
            setPage={setPage}
            setIsExperimentGroup={setIsExperimentGroup}
          />
        )}
      </body>
    </div>
  );
};

export default App;
