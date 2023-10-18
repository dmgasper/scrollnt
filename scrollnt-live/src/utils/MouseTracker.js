import { useEffect, useState, useRef, useContext } from "react";
import { MouseTrackContext, PublishMouseDataContext } from "../App";

const MouseTracker = ({
  setPage,
  isExperimentGroup,
  setPublishTrackingData,
}) => {
  const [mouseData, setMouseData] = useState([]);
  const [startDate, setStartDate] = useState("");

  const currentStartDate = new Date().toISOString();
  if (startDate === "") setStartDate(currentStartDate);

  const currentX = useRef(0);
  const currentY = useRef(0);
  const trackMouse = useContext(MouseTrackContext);
  const publishTrackingData = useContext(PublishMouseDataContext);

  let { windowWidth, windowHeight } = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  };

  useEffect(() => {
    if (publishTrackingData) {
      setPublishTrackingData(false);
      const postData = async () => {
        await fetch("https://scrollnt.azurewebsites.net/addMousePositionLog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            isExperimentGroup: isExperimentGroup,
            startDate: startDate,
            endDate: new Date().toISOString(),
            mousePosition: mouseData,
          }),
        }).then(() => {
          setPage("End");
        });
      };

      postData();
    }
  }, [
    isExperimentGroup,
    mouseData,
    publishTrackingData,
    setPublishTrackingData,
    startDate,
    setPage,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date().toISOString();

      const mousePosition = {
        x: ((currentX.current / windowWidth) * 1000).toFixed(0),
        y: ((currentY.current / windowHeight) * 1000).toFixed(0),
      };

      if (trackMouse) {
        console.log("Tracking Mouse");
        setMouseData([
          ...mouseData,
          {
            date: date,
            x: mousePosition.x,
            y: mousePosition.y,
          },
        ]);
      }
    }, 250);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      currentX.current = event.clientX;
      currentY.current = event.clientY;
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  });
};

export default MouseTracker;
