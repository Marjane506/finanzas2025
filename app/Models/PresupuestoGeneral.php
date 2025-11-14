<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PresupuestoGeneral extends Model
{
    use HasFactory;

    protected $table = 'presupuesto_general';

    protected $fillable = [
        'user_id',
        'monto_inicial',
        'saldo_actual',
        'periodo',
        'fecha_inicio',
        'fecha_fin',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
