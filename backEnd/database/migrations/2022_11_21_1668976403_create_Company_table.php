<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyTable extends Migration
{
    public function up()
    {
        Schema::create('Company', function (Blueprint $table) {

		$table->increments('idCompany');
        $table->string('telephone',20);
        $table->string('email',50);
       
        });
    }

    public function down()
    {
        Schema::dropIfExists('Company');
    }
}