<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyHeadTable extends Migration
{
    public function up()
    {
        Schema::create('Company_Head', function (Blueprint $table) {

		$table->increments('idCompany_Head',);
		$table->integer('Company_Groups_idCompany_Groups',)->unsigned();
		$table->integer('Employees_idEmployees',)->unsigned();
		$table->foreign('Company_Groups_idCompany_Groups')->references('idCompany_Groups')->on('Company_Groups');		
        $table->foreign('Employees_idEmployees')->references('idEmployees')->on('Employees');
        });
    }

    public function down()
    {
        Schema::dropIfExists('Company_Head');
    }
}