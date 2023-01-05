import { hydrateRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
/**
 * Server Side Render
 */
hydrateRoot(
  document.getElementById("root"),
  <HashRouter>
    <App />
  </HashRouter>
);
