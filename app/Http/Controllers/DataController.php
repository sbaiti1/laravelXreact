<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Employee;
class DataController extends Controller
{
    //Get Employee data
    public function getData(){
        // $employees = DB::table('employees')->get();
        $employees = Employee::all();
        return response()->json($employees);
    }

}
