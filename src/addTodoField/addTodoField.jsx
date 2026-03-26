import { Submit } from "../postApi/PostApi";
import "./style.css";

export function Card2() {
  return (
    <section id="input-wrapper" class="addTodo_container">
      <textarea
        class="addTodo_text"
        id="todo-input"
        placeholder="Voer een nieuw todo in..."
      ></textarea>
      <select class="status_input" id="todo-status" placeholder="Status">
        <option value="Select a status" disabled selected>
          Select a status
        </option>
        <option value="todo">todo</option>
        <option value="pending">pending</option>
        <option value="done">done</option>
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
