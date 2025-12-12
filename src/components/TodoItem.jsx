import { useState } from "react";
import styles from "./Todo.module.css";

function TodoItem(props) {
  //   const [isCrossetOut, setIsCrossedOut] = useState(false);

  return (
    <li
      className={styles.li}
      onClick={() => props.onChecked(props.id)}
      //   onClick={() => setIsCrossedOut(!isCrossetOut)}
      //   className={isCrossetOut ? styles.crossed : null}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
