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

    public function getEmployeeData(Request $req){
        try {
            $employee = Employee::findOrFail($req->get('employeeID'));
            return response()->json($employee);

        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'User not found']);
        }
    }

    //updating employee data
     public function updateEmployee(Request $req)
    {
        $id = $req->get('id');
        $employee_name = $req->get('employee_name');
        $salary = $req->get('salary');

        Employee::where('id' , $id)->update([
            'employee_name' => $employee_name , 
            'salary' => $salary ,

        ]);

    }

}
