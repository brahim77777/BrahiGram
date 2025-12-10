<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Post;
use App\Models\Like;
use App\Models\Comment;

use Database\Seeders\FollowsTableSeeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        User::factory(10)->create();
        Post::factory(10)->create();
	Like::factory(10)->create();
	Comment::factory(10)->create();
	$this->call([
		FollowsTableSeeder::class
    	]);

    }
}
