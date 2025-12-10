import "../../public/styles.css";
import Login from "./Login";
import { Link, Route, Routes } from "react-router-dom";
import EmojiPedia from "./EmojiPedia";
import { useState } from "react";

const numbers = [1, 22, 45, 66, 78, 100];

function fileterdNumbers() {
  return numbers.filter((num) => num > 10);
}

function reducedNumbers() {
  return numbers.reduce((acc, currentNumber) => acc + currentNumber);
}

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  function updateTime() {
    setTime(new Date().toLocaleTimeString())
  }

  setInterval(updateTime, 1000)


  // const [showTime, setShowTime] = useState(false);



  return (
    <div>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/emojipedia" exact element={<EmojiPedia />} />
      </Routes>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/emojipedia">EmojiPedia</Link>
      </nav>

      {/* <div>{fileterdNumbers()}</div>
      <div>{reducedNumbers()}</div> */}
      {/* {showTime && <h1>{time}</h1>}
      <button onClick={() => setShowTime(!showTime)}>Get Time</button> */}
      <h1>{time}</h1>

    </div>
  );
}

export default App;
