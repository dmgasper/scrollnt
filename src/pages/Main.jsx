import "./Main.css";

const Main = ({ page, setPage, isExperimentGroup }) => (
  <body className="Main-body">
    <div
      onMouseEnter={(e) => console.log("Interacting with Figma")}
      onMouseLeave={(e) => console.log("Leaving Figma")}
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
      onMouseEnter={(e) => console.log("Interacting with Qualtrics")}
      onMouseLeave={(e) => console.log("Leaving Qualtrics")}
    >
      <iframe
        title="Qualtrics-Embed"
        className="Qualtrics-embed"
        src="https://oregonstate.qualtrics.com/jfe/form/SV_0BU2a1XQslhHGeO"
      ></iframe>
    </div>
  </body>
);

export default Main;
