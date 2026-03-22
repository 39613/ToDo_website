import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import { Card } from "./card/Card.jsx";
import { Header } from "./header/Header.jsx";

import { Card2 } from "./addTodoField/addTodoField.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    {/* <Card2 /> */}
    <Card />
  </StrictMode>,
);
