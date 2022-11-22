<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssetsTable extends Migration
{
    public function up()
    {
        Schema::create('Assets', function (Blueprint $table) {

		$table->increments('idAssets');
        $table->string('assetName',20);
        $table->integer('quantity');
       
       
		$table->integer('Company_idCompany',)->unsigned();
		$table->foreign('Company_idCompany')->references('idCompany')->on('Company');
        });
    }

    public function down()
    {
        Schema::dropIfExists('Assets');
    }
}