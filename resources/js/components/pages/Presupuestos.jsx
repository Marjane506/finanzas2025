import React, { useState, useEffect } from "react";
import api from "../api";

export default function Presupuestos() {
    const [presupuestos, setPresupuestos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [monto, setMonto] = useState("");
    const [categoriaId, setCategoriaId] = useState("");
    const [periodo, setPeriodo] = useState("mensual");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [loading, setLoading] = useState(true);

    // 🧠 Cargar presupuestos y categorías
    useEffect(() => {
        Promise.all([api.get("/presupuestos"), api.get("/categorias")])
            .then(([presRes, catRes]) => {
                setPresupuestos(presRes.data);
                setCategorias(catRes.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al cargar datos:", err);
                setLoading(false);
            });
    }, []);

    // 🧾 Crear nuevo presupuesto
    const handleSubmit = (e) => {
        e.preventDefault();
        api.post("/presupuestos", {
            user_id: 1, // ⚠️ temporal, hasta conectar auth
            categoria_id: categoriaId,
            monto,
            periodo,
            fecha_inicio: fechaInicio,
            fecha_fin: fechaFin,
        })
            .then((res) => {
                setPresupuestos([...presupuestos, res.data.presupuesto]);
                setMonto("");
                setCategoriaId("");
                setFechaInicio("");
                setFechaFin("");
            })
            .catch((err) => {
                console.error("Error al crear presupuesto:", err);
                alert("Error al crear presupuesto");
            });
    };

    if (loading) return <p className="p-4">Cargando...</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Presupuestos</h1>

            {/* Formulario */}
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow rounded-lg p-4 mb-6 space-y-4"
            >
                <div className="flex flex-wrap gap-3">
                    <select
                        value={categoriaId}
                        onChange={(e) => setCategoriaId(e.target.value)}
                        className="border rounded p-2 flex-1"
                        required
                    >
                        <option value="">Selecciona categoría</option>
                        {categorias.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.nombre}
                            </option>
                        ))}
                    </select>

                    <input
                        type="number"
                        step="0.01"
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        placeholder="Monto (€)"
                        className="border rounded p-2 w-32"
                        required
                    />

                    <select
                        value={periodo}
                        onChange={(e) => setPeriodo(e.target.value)}
                        className="border rounded p-2"
                    >
                        <option value="mensual">Mensual</option>
                        <option value="semanal">Semanal</option>
                    </select>

                    <input
                        type="date"
                        value={fechaInicio}
                        onChange={(e) => setFechaInicio(e.target.value)}
                        className="border rounded p-2"
                    />

                    <input
                        type="date"
                        value={fechaFin}
                        onChange={(e) => setFechaFin(e.target.value)}
                        className="border rounded p-2"
                    />

                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Añadir
                    </button>
                </div>
            </form>

            {/* Lista */}
            {presupuestos.length === 0 ? (
                <p>No hay presupuestos registrados aún.</p>
            ) : (
                <ul className="bg-white rounded-lg shadow divide-y">
                    {presupuestos.map((p) => (
                        <li
                            key={p.id}
                            className="p-4 flex justify-between items-center"
                        >
                            <div>
                                <span className="font-semibold">
                                    {p.categoria?.nombre || "Sin categoría"}
                                </span>{" "}
                                — {p.periodo}
                            </div>
                            <div className="text-right">
                                <span className="text-lg font-bold">
                                    {p.monto} €
                                </span>
                                <div className="text-gray-500 text-sm">
                                    {p.fecha_inicio} → {p.fecha_fin}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
