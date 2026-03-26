import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Card } from "./card/Card.jsx";
import { Header } from "./header/Header.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Card />
  </StrictMode>,
);
