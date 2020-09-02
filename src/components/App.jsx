import React, { useState } from "react";

function App() {
  const [start, updateTime] = useState("time");

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
    console.log(updateTime);
  }

  return (
    <div className="container">
      <h1>{start}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
