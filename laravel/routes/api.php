<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VehicleController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register',[VehicleController::class, 'register']);
Route::post('/login',[VehicleController::class, 'login']);

Route::get('/makes', [VehicleController::class, 'getMakes']);
Route::get('/models/{make}', [VehicleController::class, 'getModels']);
Route::get('/types/{make}/{model}', [VehicleController::class, 'getTypes']);
Route::get('/part-number/{make}/{model}/{type}', [VehicleController::class, 'getPartNumber']);
