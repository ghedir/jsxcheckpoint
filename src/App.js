import "./style.css";
import "./App.css";
import myInSrcimage from "./imageInSrc.jpg";

function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title">Ghada Ghedir</h1>
        <br />
        <img src={myInSrcimage} alt="imageInSrc" />
        <br />
        <img src="/assets/imageInPublic.jpg" alt="myInPublic" />
      </div>
      <video style={{ width: "320", height: "240" }} controls>
        <source src="/assets/myVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default App;
