<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    public function up()
    {
        Schema::create('Employees', function (Blueprint $table) {

        $table->increments('idEmployees');
        $table->string('EmName',20);
        $table->string('telephone',20);
        $table->string('address',120);
       
		$table->integer('People_idPeople',)->unsigned();
		$table->integer('Company_idCompany',)->unsigned();
		$table->foreign('People_idPeople')->references('idPeople')->on('People');		
        $table->foreign('Company_idCompany')->references('idCompany')->on('Company');
        });
    }

    public function down()
    {
        Schema::dropIfExists('Employees');
    }
}