import { Submit } from "../postApi/PostApi";
import styles from "./Card.module.css";
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";

const input = document.getElementById("todo-add");

function Test() {
  console.log(input);
}

export function Card2() {
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
      <button
        type="submit"
        class="addTodo_button"
        id="todo-add"
        onClick={Submit}
      >
        Toevoegen
      </button>
    </section>
  );
}
