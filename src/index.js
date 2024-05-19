import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import SpellCheckApp from "./SpellCheckApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SpellCheckApp />
  </StrictMode>
);
