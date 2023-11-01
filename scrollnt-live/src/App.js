import { createContext, useState } from "react";

import "./App.css";
import Header from "./Header";
import Start from "./pages/Start";
import End from "./pages/End";
import Main from "./pages/Main";
import Error from "./pages/Error";

const MouseTrackContext = createContext(null);
const PublishMouseDataContext = createContext(null);

const App = () => {
  const [page, setPage] = useState("Start");
  const [initials, setInitials] = useState("");
  const [isExperimentGroup, setIsExperimentGroup] = useState("");
  const [trackMouse, setTrackMouse] = useState(false);
  const [publishMouseData, setPublishMouseData] = useState(false);

  return (
    <MouseTrackContext.Provider value={trackMouse}>
      <PublishMouseDataContext.Provider value={publishMouseData}>
        <div className="App">
          <header className="App-header clipping-container">
            <Header
              page={page}
              setPage={setPage}
              setTrackMouse={setTrackMouse}
              setPublishMouseData={setPublishMouseData}
            />
          </header>
          <body id="App-Main" className="App-body">
            {page === "Main" && (
              <Main
                setPage={setPage}
                initials={initials}
                isExperimentGroup={isExperimentGroup}
                setTrackMouse={setTrackMouse}
                publishMouseData={publishMouseData}
                setPublishTrackingData={setPublishMouseData}
              />
            )}
            {page === "Start" && (
              <Start
                setPage={setPage}
                setInitials={setInitials}
                setTrackMouse={setTrackMouse}
                setIsExperimentGroup={setIsExperimentGroup}
              />
            )}
            {page === "End" && <End />}
            {page === "Error" && <Error />}
          </body>
        </div>
      </PublishMouseDataContext.Provider>
    </MouseTrackContext.Provider>
  );
};

export { App, MouseTrackContext, PublishMouseDataContext };
