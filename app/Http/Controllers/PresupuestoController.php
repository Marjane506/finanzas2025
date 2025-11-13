<?php

namespace App\Http\Controllers;

use App\Models\Presupuesto;
use Illuminate\Http\Request;

class PresupuestoController extends Controller
{
    public function index()
    {
        return Presupuesto::with('categoria')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'categoria_id' => 'required|exists:categorias,id',
            'monto' => 'required|numeric|min:0',
            'periodo' => 'required|in:mensual,semanal',
            'fecha_inicio' => 'nullable|date',
            'fecha_fin' => 'nullable|date',
        ]);

        $presupuesto = Presupuesto::create($validated);

        return response()->json([
            'ok' => true,
            'presupuesto' => $presupuesto->load('categoria'),
        ], 201);
    }

    public function show(Presupuesto $presupuesto)
    {
        return $presupuesto->load('categoria');
    }

    public function update(Request $request, Presupuesto $presupuesto)
    {
        $validated = $request->validate([
            'monto' => 'sometimes|numeric|min:0',
            'periodo' => 'sometimes|in:mensual,semanal',
            'fecha_inicio' => 'nullable|date',
            'fecha_fin' => 'nullable|date',
        ]);

        $presupuesto->update($validated);

        return response()->json([
            'ok' => true,
            'presupuesto' => $presupuesto->load('categoria'),
        ]);
    }

    public function destroy(Presupuesto $presupuesto)
    {
        $presupuesto->delete();

        return response()->json(['ok' => true]);
    }
}
