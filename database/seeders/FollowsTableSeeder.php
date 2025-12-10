<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\Follows;
use Illuminate\Support\Arr;

class FollowsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
			
	public function run(): void
	{
	    $ids = [1,2,3,4,5,6,7,8,9,10];
	    $usedPairs = [];
	    $follows = [];
	
	    for ($i = 0; $i < 25; $i++) {
	
	        $key = Arr::random($ids);
	        $value = Arr::random($ids);
	
	        // REPEAT WHILE invalid
	        while ($key == $value || isset($usedPairs["$key-$value"])) {
	            $key = Arr::random($ids);
	            $value = Arr::random($ids);
	        }
	
	        // mark pair as used
	        $usedPairs["$key-$value"] = true;
	
	        // store
	        $follows[$i] = [
	            "follower_id" => $key,
	            "followed_id" => $value
	        ];
	    }
	
	    DB::table('follows')->insert($follows);
	}

}
