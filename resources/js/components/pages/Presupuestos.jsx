import React, { useState, useEffect } from "react";
import api from "../api";

export default function PresupuestoGeneral() {
    const [presupuesto, setPresupuesto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/presupuesto-general")
            .then((res) => {
                setPresupuesto(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const handleAddBudget = (data) => {
        api.post("/presupuesto-general", {
            user_id: 1, // temporal
            monto_inicial: data.monto,
            saldo_actual: data.monto,
            periodo: data.periodo,
            fecha_inicio: data.fechaInicio,
            fecha_fin: data.fechaFin,
        })
            .then((res) => setPresupuesto(res.data.presupuesto))
            .catch((err) => console.error(err));
    };

    if (loading) return <p className="text-center p-4">Cargando...</p>;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            {!presupuesto ? (
                <div className="text-center space-y-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        ¡Bienvenido!
                    </h1>
                    <p className="text-gray-600 max-w-md mx-auto">
                        Antes de empezar a registrar tus movimientos, define tu
                        presupuesto inicial. Este será tu punto de partida para
                        calcular gastos y ahorros.
                    </p>
                    <BudgetForm onSubmit={handleAddBudget} />
                </div>
            ) : (
                <div className="bg-white shadow-md rounded-2xl p-6 text-center border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Presupuesto definido
                    </h2>
                    <p className="text-lg text-gray-600">
                        Monto inicial:{" "}
                        <strong>{presupuesto.monto_inicial} €</strong>
                    </p>
                    <button
                        onClick={() => (window.location.href = "/dashboard")}
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Ir al Dashboard
                    </button>
                </div>
            )}
        </div>
    );
}
