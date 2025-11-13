import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex">
            {/* Aquí podrías tener tu sidebar o navbar */}
            <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
                <h2 className="text-lg font-bold mb-6">Mi Panel</h2>
                <nav>
                    <ul className="space-y-2">
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Aquí se renderiza la página hija (Dashboard, etc.) */}
            <main className="flex-1 bg-gray-50 p-6">
                <Outlet />
            </main>
        </div>
    );
}
