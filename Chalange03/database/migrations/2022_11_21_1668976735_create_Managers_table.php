<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateManagersTable extends Migration
{
    public function up()
    {
        Schema::create('Managers', function (Blueprint $table) {

        $table->increments('idManager');
        $table->string('name',20);
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
        Schema::dropIfExists('Managers');
    }
}