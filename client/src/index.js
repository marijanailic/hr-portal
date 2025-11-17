import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "@mui/material/styles";  // <-- correct one
import CssBaseline from "@mui/material/CssBaseline";    // optional but recommended
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
