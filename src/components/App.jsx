import "../../public/styles.css";
import Login from "./Login";
import { Link, Route, Routes } from "react-router-dom";
import EmojiPedia from "./EmojiPedia";

const numbers = [1, 22, 45, 66, 78, 100];

function fileterdNumbers() {
  return numbers.filter((num) => num > 10);
}

function reducedNumbers() {
  return numbers.reduce((acc, currentNumber) => acc + currentNumber);
}

function App() {
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

      <div>{fileterdNumbers()}</div>
      <div>{reducedNumbers()}</div>
    </div>
  );
}

export default App;
