import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "./api";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const { data } = await api.post("/login", form);
            localStorage.setItem("token", data.token);
            navigate("/");
        } catch (err) {
            setError("Email o contraseña incorrectos");
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/img/fondo-login.jpg')" }}
        >
            <div className="bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
                    Iniciar sesión
                </h2>

                {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Email
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500"
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Contraseña
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500"
                            type="password"
                            value={form.password}
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
                            required
                        />
                    </div>

                    <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 rounded-lg">
                        Entrar
                    </button>

                    <p className="text-sm text-gray-600 text-center">
                        ¿No tienes cuenta?{" "}
                        <Link
                            to="/register"
                            className="text-sky-600 hover:underline"
                        >
                            Regístrate aquí
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
