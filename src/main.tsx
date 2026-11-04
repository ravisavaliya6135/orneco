import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

function mount() {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;

  if (rootElement.hasChildNodes()) {
    try {
      hydrateRoot(
        rootElement,
        <StrictMode>
          <App />
        </StrictMode>
      );
      return;
    } catch (e) {
      console.warn("Hydration failed, falling back to createRoot:", e);
    }
  }

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
