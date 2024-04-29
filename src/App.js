import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>counter That update :</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>clicked {count} times</button>;
}
