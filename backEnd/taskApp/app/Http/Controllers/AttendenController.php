<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Attendence;

class AttendenceController extends Controller
{
    function storeAttendenceDetails(Request $request){

        print_r( $request->all() );

        

        return [$request->all()];

    }
}
