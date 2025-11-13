<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\MovimientoController;
use App\Http\Controllers\PresupuestoController;
use App\Http\Controllers\ObjetivoAhorroController;

// Rutas de autenticación

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
Route::get('/ping', fn() => response()->json(['ok' => true, 'time' => now()]));

// Rutas protegidas de la aplicación
//Route::middleware('auth:sanctum')->group(function () {

// Categorías
Route::apiResource('categorias', CategoriaController::class);

// Movimientos
Route::apiResource('movimientos', MovimientoController::class);

// Objetivos de ahorro
Route::apiResource('objetivos', ObjetivoAhorroController::class);

Route::apiResource('presupuestos', PresupuestoController::class);

Route::get('/prueba', function () {
    return response()->json(['ok' => true, 'mensaje' => 'API funcionando ✅']);
});
