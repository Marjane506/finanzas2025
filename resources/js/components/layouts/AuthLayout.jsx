import React from "react";
import { Link, Outlet } from "react-router-dom";
import bgImage from "/public/img/peter-rovder.jpg";

export default function AuthLayout() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center"
            style={{
                backgroundImage: "url('/img/peter-rovder.jpg')",
                backgroundSize: "cover",
            }}
        >
            <div className="bg-white shadow-md rounded-xl w-full max-w-md p-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
                    Finanzas Personales 💰
                </h1>
                <Outlet />
                <p className="text-center text-sm text-gray-500 mt-6">
                    <Link
                        to="/login"
                        className="text-indigo-600 hover:underline"
                    >
                        Iniciar Sesión
                    </Link>{" "}
                    |{" "}
                    <Link
                        to="/register"
                        className="text-indigo-600 hover:underline"
                    >
                        Crear Cuenta
                    </Link>
                </p>
            </div>
        </div>
    );
}
