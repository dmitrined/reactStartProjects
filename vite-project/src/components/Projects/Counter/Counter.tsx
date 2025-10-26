import { useState, type JSX } from "react";
import style from "./Counter.module.css";

export default function Counter(): JSX.Element {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handlePlus = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className={style.App}>
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={handleMinus} className={style.minus}>
          - Минус
        </button>
        <button onClick={handlePlus} className={style.plus}>
          Плюс +
        </button>
      </div>
    </div>
  );
}
