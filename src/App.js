import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="App-body">
        <iframe
          title="ScrollNT-Embed"
          className="ScrollNT-embed"
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F86BZeSTF6fubDud5QDhPEt%2FScrollNT-II%3Fnode-id%3D37-2%26starting-point-node-id%3D13%253A183%26scaling%3Dscale-down%26mode%3Ddesign%26t%3DJzmZcQv8IzmIbpu1-1"
        ></iframe>
        <iframe
          title="Qualtrics-Embed"
          className="Qualtrics-embed"
          src="https://oregonstate.qualtrics.com/jfe/form/SV_0BU2a1XQslhHGeO"
        ></iframe>
      </body>
    </div>
  );
}

export default App;
