<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nombre',
        'tipo',
        'color',
    ];

    // Relación con usuario
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relación con movimientos
    public function movimientos()
    {
        return $this->hasMany(Movimiento::class);
    }
}