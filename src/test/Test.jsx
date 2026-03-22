import styles from "./Card.module.css";
import "./style.css";

import { useState } from "react";
import { useEffect } from "react";

export function Card2() {
  //   const [card, setCard] = useState(null);
  // }

  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     text: "DIT IS EEN TEST!!!",
  //     status: "done",
  //   }),
  // };

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/todos.php", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setCard({ postId: data.id });
  //     });
  // }, []);
  return (
    <section id="input-wrapper" class="addTodo_container">
      <textarea
        class="addTodo_text"
        id="todo-input"
        placeholder="Voer een nieuw todo in..."
      ></textarea>
      <select class="status_input" id="todo-status" placeholder="Status">
        <option value="" disabled selected>
          Select a status
        </option>
        <option value="todo">ToDo</option>
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
      <button class="addTodo_button" id="todo-add">
        Toevoegen
      </button>
    </section>
  );
}
