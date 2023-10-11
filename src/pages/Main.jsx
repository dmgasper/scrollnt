import "./Main.css";
import { useEffect, useLayoutEffect, useState, useRef } from "react";

const Main = ({ isExperimentGroup }) => {
  // https://timetoprogram.com/get-width-of-element-react-js/
  // https://www.geeksforgeeks.org/how-to-determine-the-size-of-a-component-in-reactjs/
  const elementRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const getComponentDimensions = () => {
    setDimensions({
      width: elementRef.current?.offsetWidth,
      height: elementRef.current?.offsetHeight,
    });
    setPosition({
      x: elementRef.current?.offsetLeft,
      y: elementRef.current?.offsetTop,
    });
  };

  useEffect(() => {
    getComponentDimensions();
    window.addEventListener("resize", getComponentDimensions);
    return () => {
      window.removeEventListener("resize", getComponentDimensions);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {}, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dimensions, mousePosition, position]);

  return (
    <body>
      <div
        id="Main-body"
        className="Main-body"
        ref={elementRef}
        onMouseMove={(ev) =>
          setMousePosition({
            x: (ev.clientX - position.x) / dimensions.width,
            y: (ev.clientY - position.y) / dimensions.height,
          })
        }
      >
        <div
          onMouseEnter={() => console.log("Interacting with Figma")}
          onMouseLeave={() => console.log("Leaving Figma")}
        >
          {isExperimentGroup ? (
            <iframe
              title="ScrollNT-Embed"
              className="ScrollNT-embed"
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F86BZeSTF6fubDud5QDhPEt%2FScrollNT-II%3Fnode-id%3D37-2%26starting-point-node-id%3D13%253A183%26scaling%3Dscale-down%26mode%3Ddesign%26t%3DJzmZcQv8IzmIbpu1-1"
            ></iframe>
          ) : (
            <iframe
              title="ScrollNT-Embed"
              className="ScrollNT-embed"
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfsI207s18RN37WLGZx12Oo%2FScrollNT-II-(Control)%3Ftype%3Ddesign%26t%3DMuY5HYzPfb2Cnld0-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D13%253A183%26node-id%3D13-183%26mode%3Ddesign"
            ></iframe>
          )}
        </div>

        <div
          onMouseEnter={() => console.log("Interacting with Qualtrics")}
          onMouseLeave={() => console.log("Leaving Qualtrics")}
        >
          <iframe
            title="Qualtrics-Embed"
            className="Qualtrics-embed"
            src="https://oregonstate.qualtrics.com/jfe/form/SV_0BU2a1XQslhHGeO"
          ></iframe>
        </div>
      </div>
    </body>
  );
};

export default Main;
