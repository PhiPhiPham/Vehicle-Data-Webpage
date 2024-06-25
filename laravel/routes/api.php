<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VehicleController;

Route::get('/makes', [VehicleController::class, 'getMakes']);
Route::get('/models/{make}', [VehicleController::class, 'getModels']);
Route::get('/types/{make}/{model}', [VehicleController::class, 'getTypes']);
Route::get('/part-number/{make}/{model}/{type}', [VehicleController::class, 'getPartNumber']);
