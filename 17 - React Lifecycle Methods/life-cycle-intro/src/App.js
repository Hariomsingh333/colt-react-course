import "./App.css";
import GithubUser from "./components/GithubUser";
// import Quotes from "./components/Quotes";
// import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      {/* <Quotes /> */}
      <GithubUser name="colt" />
      <GithubUser name="Hariomsingh333" />
    </div>
  );
}

export default App;
