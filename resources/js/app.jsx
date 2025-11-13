import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "../css/app.css";

// React se monta dentro del <div id="app"> del Blade principal
ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
