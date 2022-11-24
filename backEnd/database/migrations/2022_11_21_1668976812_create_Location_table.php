<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocationTable extends Migration
{
    public function up()
    {
        Schema::create('Location', function (Blueprint $table) {

		$table->increments('idLocation');
        $table->string('address',50);
       
		$table->integer('Company_idCompany',)->unsigned();
		$table->foreign('Company_idCompany')->references('idCompany')->on('Company');
        });
    }

    public function down()
    {
        Schema::dropIfExists('Location');
    }
}