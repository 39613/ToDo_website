import { useState } from "react";
import { useEffect } from "react";

export function Submit() {
  const Text = document.getElementById("todo-input").value;
  const Status = document.getElementById("todo-status").value;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: Text, status: Status }),
  };
  fetch("http://localhost:8080/api/addTodo.php", options).then((ress) => {
    console.log(ress.ok);
    if (ress.ok == true) {
      location.reload();
    }
  });
}
