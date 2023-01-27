<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //generating fake data
            'employee_name' => $this->faker->name(),
            'salary' => $this->faker->numberBetween(5000,50000)
        ];
    }
}
