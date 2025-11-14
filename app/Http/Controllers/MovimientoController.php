<?php

namespace App\Http\Controllers;

use App\Models\Movimiento;
use Illuminate\Http\Request;
use App\Models\PresupuestoGeneral;


class MovimientoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'categoria_id' => 'required|exists:categorias,id',
            'tipo' => 'required|in:ingreso,gasto',
            'monto' => 'required|numeric|min:0',
            'descripcion' => 'nullable|string',
            'fecha' => 'nullable|date',
        ]);

        $movimiento = Movimiento::create($validated);

        $presupuesto = PresupuestoGeneral::where('user_id', $validated['user_id'])->first();

        if ($presupuesto) {
            if ($validated['tipo'] === 'ingreso') {
                $presupuesto->saldo_actual += $validated['monto'];
            } else {
                $presupuesto->saldo_actual -= $validated['monto'];
            }
            $presupuesto->save();
        }

        return response()->json([
            'ok' => true,
            'movimiento' => $movimiento,
            'nuevo_saldo' => $presupuesto ? $presupuesto->saldo_actual : null,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Movimiento $movimiento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movimiento $movimiento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movimiento $movimiento)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movimiento $movimiento)
    {
        //
    }
}
