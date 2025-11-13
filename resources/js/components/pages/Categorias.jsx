import React, { useEffect, useState } from "react";
import api from "../api";

export default function Categorias() {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Campos del formulario
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("gasto");
    const [color, setColor] = useState("#cccccc");

    // Cargar categorías al iniciar
    useEffect(() => {
        api.get("/categorias")
            .then((res) => {
                setCategorias(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al obtener categorías:", err);
                setError("No se pudieron cargar las categorías");
                setLoading(false);
            });
    }, []);

    // Crear nueva categoría
    const handleSubmit = (e) => {
        e.preventDefault();
        api.post("/categorias", { nombre, tipo, color })
            .then((res) => {
                setCategorias([...categorias, res.data.categoria]);
                setNombre("");
                setColor("#cccccc");
            })
            .catch((err) => {
                console.error("Error al crear categoría:", err);
                alert("Error al crear categoría");
            });
    };

    if (loading) return <p className="p-4">Cargando...</p>;
    if (error) return <p className="p-4 text-red-600">{error}</p>;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Categorías</h1>

            {/* Formulario */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-4 rounded-lg shadow mb-6"
            >
                <div className="flex flex-col md:flex-row gap-3">
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="border rounded p-2 flex-1"
                        required
                    />

                    <select
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        className="border rounded p-2"
                    >
                        <option value="gasto">Gasto</option>
                        <option value="ingreso">Ingreso</option>
                    </select>

                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="border rounded p-1 w-16 h-10"
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Añadir
                    </button>
                </div>
            </form>

            {/* Lista */}
            <ul className="divide-y divide-gray-200 bg-white rounded-xl shadow">
                {categorias.map((cat) => (
                    <li
                        key={cat.id}
                        className="p-4 flex justify-between items-center"
                    >
                        <span>
                            <span className="font-medium">{cat.nombre}</span>{" "}
                            <span className="text-gray-500 text-sm ml-2">
                                ({cat.tipo})
                            </span>
                        </span>
                        <span
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: cat.color }}
                        ></span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
