import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root")!;

// If the root already has content (pre-rendered by react-snap), hydrate it.
// Otherwise, do a fresh render (e.g. during development).
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
