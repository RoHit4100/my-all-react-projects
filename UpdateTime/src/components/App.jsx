import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  let time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
