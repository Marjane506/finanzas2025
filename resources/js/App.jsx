import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div className="text-center mt-5">
            <h1>Hola desde React 🎉</h1>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
