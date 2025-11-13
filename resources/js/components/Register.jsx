import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "./api";

export default function Register() {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        password: "",
        privacy: false,
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!form.privacy) {
            setError("Debes aceptar la Política de Privacidad.");
            return;
        }
        try {
            const { data } = await api.post("/register", form);
            localStorage.setItem("token", data.token);
            navigate("/");
        } catch (err) {
            setError("No se pudo registrar. Revisa el email o la conexión.");
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/img/fondo-register.jpg')" }}
        >
            <div className="bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
                    Crear cuenta
                </h2>

                {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

                <form onSubmit={onSubmit} className="space-y-4">
                    <input
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500"
                        placeholder="Nombre"
                        value={form.nombre}
                        onChange={(e) =>
                            setForm({ ...form, nombre: e.target.value })
                        }
                        required
                    />
                    <input
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        required
                    />
                    <input
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-500"
                        type="password"
                        placeholder="Contraseña"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        required
                    />

                    <label className="flex items-start gap-2 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 text-sky-600"
                            checked={form.privacy}
                            onChange={(e) =>
                                setForm({ ...form, privacy: e.target.checked })
                            }
                        />
                        <span>
                            Acepto la{" "}
                            <a
                                className="text-sky-600 hover:underline"
                                href="#"
                            >
                                Política de Privacidad
                            </a>{" "}
                            y los{" "}
                            <a
                                className="text-sky-600 hover:underline"
                                href="#"
                            >
                                Términos de Servicio
                            </a>
                            .
                        </span>
                    </label>

                    <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 rounded-lg">
                        Registrarme
                    </button>

                    <p className="text-sm text-gray-600 text-center">
                        ¿Ya tienes cuenta?{" "}
                        <Link
                            to="/login"
                            className="text-sky-600 hover:underline"
                        >
                            Inicia sesión
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
