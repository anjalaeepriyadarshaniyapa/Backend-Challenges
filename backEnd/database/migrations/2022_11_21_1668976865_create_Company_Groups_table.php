<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyGroupsTable extends Migration
{
    public function up()
    {
        Schema::create('Company_Groups', function (Blueprint $table) {

		$table->increments('idCompany_Groups',);
		$table->integer('Company_idCompany',)->unsigned();
		$table->integer('Company_Groups_idCompany_Groups',)->unsigned();
		$table->foreign('Company_idCompany')->references('idCompany')->on('Company');		
        $table->foreign('Company_Groups_idCompany_Groups')->references('idCompany_Groups')->on('Company_Groups');
        });
    }

    public function down()
    {
        Schema::dropIfExists('Company_Groups');
    }
}