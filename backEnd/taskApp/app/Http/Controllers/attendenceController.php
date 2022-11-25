<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Attendance;
use Illuminate\Support\Facades\DB;

class attendenceController extends Controller
{
    function storeAttendenceDetails(Request $request){
    
        $data = [];
  foreach( $request->all() as $attendenceRaw){

        unset($attendenceRaw['__rowNum__']);

         array_push($data,$attendenceRaw);
  }

DB::table('attendances')->insert($data);

        return $data;

    }
}
