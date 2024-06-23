<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VehicleController extends Controller
{
    //
    function register(Request $req) 
    {
        return $req->input();
    }

    function login(Request $req)
    {
        $vehicle= Vehicle::where('make', 'AIRMAN')->first();
        return $vehicle;
    }
   
}
