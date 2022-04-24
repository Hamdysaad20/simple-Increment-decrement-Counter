import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
export default function Home() {
  const [counter, setCounter] = useState(12);
  let [isIncrementing, setIsIncrementing] = useState(false);

  useEffect(
    function increment() {
      setCounter(isIncrementing ? counter + 1 : counter - 1);
    },
    [counter]
  );

  return (
    <div className={`${counter > 0 ? styles.red : styles.green} `}>
      <h1>{counter}</h1>
      <h1>{isIncrementing ? "Incrementing" : "Decrementing"}</h1>
      <button
        onClick={() => {
          setIsIncrementing(!isIncrementing);
        }}>
        change direction
      </button>
    </div>
  );
}
