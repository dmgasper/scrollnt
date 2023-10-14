import { useEffect, useState, useRef, useContext } from "react";
import { MouseTrackContext, PublishMouseDataContext } from "../App";

const MouseTracker = ({ setPage }) => {
  const [mouseData, setMouseData] = useState([]);

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
      fetch(process.env.API_URL);
      console.log("", mouseData);
      setPage("End");
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date().toISOString();

      const mousePosition = {
        x: ((currentX.current / windowWidth) * 1000).toFixed(0),
        y: ((currentY.current / windowHeight) * 1000).toFixed(0),
      };

      setMouseData([
        ...mouseData,
        {
          date: date,
          x: mousePosition.x,
          y: mousePosition.y,
        },
      ]);
      if (trackMouse)
        console.log("", {
          date: date,
          x: mousePosition.x,
          y: mousePosition.y,
        });
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
