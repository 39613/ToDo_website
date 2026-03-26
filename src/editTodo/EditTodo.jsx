function EditFetch(status, id) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, status: status }),
  };
  fetch("http://localhost:8080/api/editTodo.php", options).then((ress) => {
    console.log(ress.ok);
    if (ress.ok == true) {
      location.reload();
    }
  });
}

export function Edit(element) {
  let status = element.target.innerText;
  let id = element.target.id;

  if (status == "done") {
    EditFetch("pending", id);
  } else if (status == "pending") {
    EditFetch("todo", id);
  } else if (status == "todo") {
    EditFetch("done", id);
  }
}
