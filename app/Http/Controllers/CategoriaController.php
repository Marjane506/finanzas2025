<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoriaController extends Controller
{
    /**
     * Mostrar todas las categorías del usuario.
     */
    public function index()
    {
        // En producción usar Auth::id(), pero mientras tanto podemos forzar user_id = 1
        $userId = Auth::id() ?? 1;

        $categorias = Categoria::where('user_id', $userId)->get();
        return response()->json($categorias);
    }

    /**
     * Guardar una nueva categoría.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'tipo' => 'required|in:ingreso,gasto',
            'color' => 'nullable|string|max:20',
        ]);

        $categoria = \App\Models\Categoria::create($validated);
        // Devolvemos la respuesta
        return response()->json([
            'ok' => true,
            'categoria' => $categoria
        ], 201);
    }

    /**
     * Actualizar una categoría existente.
     */
    public function update(Request $request, Categoria $categoria)
    {
        $validated = $request->validate([
            'nombre' => 'string|max:255',
            'tipo' => 'in:ingreso,gasto',
            'color' => 'nullable|string|max:20',
        ]);

        $categoria->update($validated);

        return response()->json($categoria);
    }

    /**
     * Eliminar una categoría.
     */
    public function destroy(Categoria $categoria)
    {
        $categoria->delete();
        return response()->json(['message' => 'Categoría eliminada']);
    }
}
