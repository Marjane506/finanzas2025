import React, { useState } from "react";
import axios from "axios";

export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.get("/sanctum/csrf-cookie"); // Sanctum cookie
            const { data } = await axios.post("/api/register", form, {
                withCredentials: true,
            });
            setMessage(`Bienvenido ${data.user.name}`);
        } catch (error) {
            setMessage("Error al registrarse");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                type="text"
                placeholder="Nombre"
                className="w-full p-2 mb-3 border rounded"
                value={form.name}
                onChange={handleChange}
            />
            <input
                name="email"
                type="email"
                placeholder="Correo electrónico"
                className="w-full p-2 mb-3 border rounded"
                value={form.email}
                onChange={handleChange}
            />
            <input
                name="password"
                type="password"
                placeholder="Contraseña"
                className="w-full p-2 mb-3 border rounded"
                value={form.password}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
                Registrarse
            </button>
            {message && (
                <p className="mt-4 text-center text-gray-700">{message}</p>
            )}
        </form>
    );
}
