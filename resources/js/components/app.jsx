import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
