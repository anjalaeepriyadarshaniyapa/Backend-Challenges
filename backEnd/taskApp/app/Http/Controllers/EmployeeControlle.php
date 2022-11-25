<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Employee;

class EmployeeControlle extends Controller
{
    
    
    
    function saveEmployeeDetails(Request $request){

        $employee = new Employee;
        $employee->name=$request->name;
        $employee->position=$request->position;
        $employee->address=$request->address;
        $employee->telephone=$request->telephone;
        $result=$employee->save();

        if($result)
        {
        return ["Result"=>"Data has been saved"];
        }
        else {
            return["result"=>"Operation failed"];
        }
    }
}
