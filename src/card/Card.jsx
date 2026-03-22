import styles from "./card.module.css";
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import { Card2 } from "../addTodoField/addTodoField.jsx";

export function Card() {
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/todos.php")
      .then((response) => response.json())
      .then((data) => {
        setCard(data);
        // console.log(data);
        // console.log(data[0][1]);
      });
  }, []);

  if (card === null) {
    return (
      <section className={styles.card}>
        <h2>Fetching card</h2>
      </section>
    );
  } else {
    const test = card.map((item) => (
      <div className={styles.container}>
        <ul className={styles.todo_ul}>
          <div className={styles.todo_div_top}>
            <li className={styles.todo_item}> {item[1]}</li>
            <li class={item[2]}> status: {item[2]} </li>
          </div>
          <div className={styles.bottom}>
            <li className={styles.todo_datum}> {item[3]} </li>
          </div>
        </ul>
      </div>
    ));
    return (
      <section className={styles.mainSection}>
        <Card2 />
        {test}
      </section>
    );
  }
}
