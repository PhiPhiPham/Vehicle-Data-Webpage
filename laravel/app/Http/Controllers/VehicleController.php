<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehicle;

class VehicleController extends Controller
{
    //
    function register(Request $req) 
    {
        $vehicle= new Vehicle;
        $vehicle->make= $req->input('make');
        $vehicle->model= $req->input('model');
        $vehicle->type= $req->input('type');
        $vehicle->part_number= $req->input('part_number');
        return $vehicle;
    }

    function login(Request $req)
    {
        $vehicle= Vehicle::where('make', 'AIRMAN')->first();
        return $vehicle;
    }
   
}
