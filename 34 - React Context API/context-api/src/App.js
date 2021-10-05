import "./App.css";
import Page from "./components/Page";
import PropsContext from "./context/PropsContext";

function App() {
  return (
    <div className="App">
      <PropsContext>
        <Page />
      </PropsContext>
    </div>
  );
}

export default App;
