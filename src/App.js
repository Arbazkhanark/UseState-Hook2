import { useState } from "react";
import "./styles.css";

function App() {
  setInterval(updateTime, 1000);
  let [time, setTime] = useState("TIME");

  const currTime = new Date().toLocaleTimeString();
  console.log(currTime);

  function updateTime() {
    setTime((time = currTime));
  }

  return (
    <>
      <h1>TIME: {time}</h1>
      <button onClick={updateTime}>Get Live TIME</button>
    </>
  );
}

export default App;
