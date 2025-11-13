import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./layouts/Layout";
import Presupuestos from "./pages/Presupuestos";
import Dashboard from "./pages/Dashboard";
import Categorias from "./pages/Categorias";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas públicas */}
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                {/* Rutas protegidas / privadas */}
                <Route path="/presupuestos" element={<Presupuestos />} />

                <Route element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                <Route element={<Layout />}>
                    <Route path="/categorias" element={<Categorias />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
