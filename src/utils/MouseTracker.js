import { useEffect, useState, useRef, useContext } from "react";
import { MouseTrackContext } from "../App";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const currentX = useRef(0);
  const currentY = useRef(0);
  const trackMouse = useContext(MouseTrackContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setMousePosition({ x: currentX.current, y: currentY.current });
      if (trackMouse) console.log("", mousePosition);
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
