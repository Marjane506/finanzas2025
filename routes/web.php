<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); // este es tu Blade con React
})->where('any', '.*');