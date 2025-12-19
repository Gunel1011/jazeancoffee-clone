import { createRoot } from "react-dom/client";
import "./assets/scss/index.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { initScrollPath } from "./scrollGsap/scroll.ts";
initScrollPath();
createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
