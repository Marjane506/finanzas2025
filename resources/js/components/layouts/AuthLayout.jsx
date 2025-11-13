import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <main
            className="min-h-screen flex flex-col "
            style={{
                backgroundImage: "url('/img/peter-rovder.jpg')",
                backgroundSize: "cover",
            }}
        >
            <header className="p-8">
                <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
                    Financial
                </h1>
            </header>
            <section className="flex flex-1 items-center justify-around md:px-20">
                {/* textos h2 a la izquierda */}
                {/*<div
                    className="text-white space-y-6 ml-5"
                    style={{ transform: "scaleX(1.2)" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                        Tu Dinero
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                        Tus Reglas
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                        Tu Futuro
                    </h2>
                </div>*/}
                {/* formulario a la derecha */}
                <div className="bg-white/90 shadow-2xl rounded-2xl p-12 w-full max-w-lg h-[600px] flex flex-col justify-center backdrop-blur-sm">
                    <Outlet />
                    <p className="text-center text-sm text-gray-500 mt-4">
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
            </section>
            {/* espacio inferior opcional */}
            <footer className="p-6 text-center text-white text-sm opacity-70">
                © {new Date().getFullYear()} Finanzas Personales
            </footer>
        </main>
    );
}
