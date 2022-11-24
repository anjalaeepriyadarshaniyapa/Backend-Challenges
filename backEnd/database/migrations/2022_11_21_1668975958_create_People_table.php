<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration
{
    public function up()
    {
        Schema::create('People', function (Blueprint $table) {

		$table->increments('idPeople');
       
        
        });
    }

    public function down()
    {
        Schema::dropIfExists('People');
    }
}