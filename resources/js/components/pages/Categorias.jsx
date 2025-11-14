import React from "react";
import { PlusCircle, ChevronDown } from "lucide-react";

export default function Categorias() {
    const presupuesto = 800;
    const categorias = [
        { id: 1, nombre: "Alimentación", tipo: "gasto", color: "#FF6B6B" },
        { id: 2, nombre: "Transporte", tipo: "gasto", color: "#4ECDC4" },
        { id: 3, nombre: "Vivienda", tipo: "gasto", color: "#FFD93D" },
        { id: 4, nombre: "Salario", tipo: "ingreso", color: "#6BCB77" },
        { id: 5, nombre: "Inversiones", tipo: "ingreso", color: "#4D96FF" },
    ];

    const fecha = new Date().toLocaleDateString("es-ES", {
        month: "long",
        year: "numeric",
    });
    const fechaCapitalizada = fecha.charAt(0).toUpperCase() + fecha.slice(1);

    return (
        <div className="max-w-8xl mx-auto p-8 min-h-screen">
            <div className="flex items-center gap-2 mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    {fechaCapitalizada}
                </h1>
                <button
                    onClick={() =>
                        alert("Ver historial de meses (próximamente...)")
                    }
                    className="text-gray-500 hover:text-indigo-600 transition"
                >
                    <ChevronDown className="w-6 h-6" />
                </button>
            </div>

            <div className="flex justify-end mb-6">
                <button
                    onClick={() => alert("Función próximamente...")}
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2"
                >
                    <PlusCircle size={20} />
                    Nueva Categoría
                </button>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-indigo-50 text-indigo-600 uppercase text-xs tracking-wider">
                        <tr>
                            <th className="px-6 py-3 text-left font-semibold">
                                Nombre
                            </th>
                            <th className="px-6 py-3 text-left font-semibold">
                                Tipo
                            </th>
                            <th className="px-6 py-3 text-center font-semibold">
                                Color
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                        {categorias.map((cat) => (
                            <tr
                                key={cat.id}
                                className="hover:bg-indigo-50 transition duration-150"
                            >
                                <td className="px-6 py-4 font-medium">
                                    {cat.nombre}
                                </td>
                                <td className="px-6 py-4 capitalize">
                                    {cat.tipo === "gasto"
                                        ? "💸 Gasto"
                                        : "💰 Ingreso"}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span
                                        className="inline-block w-5 h-5 rounded-full border border-gray-300 shadow-sm"
                                        style={{ backgroundColor: cat.color }}
                                    ></span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
