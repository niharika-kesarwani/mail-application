import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { MailProvider, useMails } from "./contexts/mail-context.jsx";

export { useMails };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MailProvider>
        <App />
      </MailProvider>
    </Router>
  </React.StrictMode>
);
