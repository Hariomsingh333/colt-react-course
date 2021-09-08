import Messages from "./components/Messages";
import Props from "./components/Props";
import Slot from "./components/Slot";
function App() {
  return (
    <div className="App">
      <Props
        name="BolBam"
        age={21}
        job="softer developer"
        hobbies={["coding ", "playing", " reading"]}
        isFunny={true}
      />
      <Slot heading="If/else is react" s1="x" s2="x" s3="y" />
      <Messages />
    </div>
  );
}

export default App;
