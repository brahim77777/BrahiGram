<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
	 return [
            'post_image'=>  Arr::random( ["male1.jpg", "male2.jpeg", "female1.jpg", "female2.jpg"]),
            'user_id'=>  User::InRandomOrder()->first()->id,
	    'caption'=> fake()->paragraph()
        ];
    }
}
