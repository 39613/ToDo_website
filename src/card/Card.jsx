import styles from "./card.module.css";
import { Edit } from "../editTodo/EditTodo";
import { DeleteTodo } from "../deleteTodo/DeleteTodo.jsx";
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
      });
  }, []);

  if (card === null) {
    return <section>{/* <h2>Fetching card</h2> */}</section>;
  } else {
    const test = card.map((item) => (
      <div className={styles.container}>
        <ul className={styles.todo_ul}>
          <div>
            <li className={styles.todo_item}> {item[1]}</li>
            <li id={item[0]} onClick={Edit} class={item[2]}>
              {" "}
              {item[2]}{" "}
            </li>
          </div>
          <div className={styles.bottom}>
            <li className={styles.todo_datum}> {item[3]} </li>
            <i id={item[0]} onClick={DeleteTodo} class="fa-solid fa-trash"></i>
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
