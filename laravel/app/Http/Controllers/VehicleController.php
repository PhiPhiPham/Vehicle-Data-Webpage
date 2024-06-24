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

    // Get distinct makes
    public function getMakes()
    {
        $makes = Vehicle::distinct()
                        ->pluck('make');
        return response()->json($makes);
    }

    // Get distinct models for a given make
    public function getModels($make)
    {
        $models = Vehicle::where('make', $make)
                        ->distinct()
                        ->pluck('model');
        return response()->json($models);
    }

    // Get distinct types for a given make and model
    public function getTypes($make, $model)
    {
        $types = Vehicle::where('make', $make)
                        ->where('model', $model)
                        ->distinct()
                        ->pluck('type');
        return response()->json($types);
    }

    // Get part number for a given make, model, and type
    public function getPartNumber($make, $model, $type)
    {
        $partNumber = Vehicle::where('make', $make)
                             ->where('model', $model)
                             ->where('type', $type)
                             ->pluck('part_number')
                             ->first();
        return response()->json(['part_number' => $partNumber]);
    }
   
}
