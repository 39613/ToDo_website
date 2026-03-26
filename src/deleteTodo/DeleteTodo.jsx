export function DeleteTodo(element) {
  let id = element.target.id;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  };
  fetch("http://localhost:8080/api/deletetodo.php", options).then((ress) => {
    console.log(ress.ok);
    if (ress.ok == true) {
      location.reload();
    }
  });
}
