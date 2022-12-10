<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Attendance;
use Illuminate\Support\Facades\DB;

class attendenceController extends Controller
{
    function storeAttendenceDetails(Request $request)
    {

        $data = [];
        foreach ($request->all() as $attendenceRaw) {

            unset($attendenceRaw['__rowNum__']);

            array_push($data, $attendenceRaw);
        }

        DB::table('attendances')->insert($data);

        return $data;

    }

    function getAttendenceDetails(Request $request)
    {

        $results = DB::select('select employees.id,employees.name,employees.position,employees.address,attendances.checkin,attendances.checkout,attendances.total_working_hours from employees left join attendances
        on employees.id=attendances.emp_id');

        return $results;

    }
}