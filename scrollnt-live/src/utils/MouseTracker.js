import { useEffect, useState, useRef, useContext } from "react";
import { MouseTrackContext, PublishMouseDataContext } from "../App";

const MouseTracker = ({
  setPage,
  initials,
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
        await fetch(
          (process.env.NODE_ENV === "development"
            ? "http://localhost:8080"
            : "https://scrollnt.azurewebsites.net"
          ).concat("/addMousePositionLog"),

          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              initials: initials,
              isExperimentGroup: isExperimentGroup,
              startDate: startDate,
              endDate: new Date().toISOString(),
              mousePosition: mouseData,
            }),
          }
        )
          .then((res) => {
            console.log(res);
            if (res.status === 201) {
              setPage("End");
            } else {
              setPage("Error");
            }
          })
          .catch(() => {
            setPage("Error");
          });
      };

      postData();
    }
  }, [
    initials,
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
        console.log(mouseData);
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
