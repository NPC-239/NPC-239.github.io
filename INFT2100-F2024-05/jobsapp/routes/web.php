<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/', function () {
    return view('jobs', [

            'jobs' => [
            [
                'id' => 1,
                'title' => 'Intermediate Developer',
                'salary' => '$70,000'
            ],
            [
                'id' => 2,
                'title' => 'Junior Developer',
                'salary' => '$50,000'
            ],
            [
                'id' => 3,
                'title' => 'Senior Developer',
                'salary' => '$100,000'
            ]
        ]
    ]);
});

Route::get('/', function () {
    return view('contact');
});

Route::get('/jobs/{id}', function ($id) {

    //dd($id);

        $jobs =[
            [
                'id' => 1,
                'title' => 'Intermediate Developer',
                'salary' => '$70,000'
            ],
            [
                'id' => 2,
                'title' => 'Junior Developer',
                'salary' => '$50,000'
            ],
            [
                'id' => 3,
                'title' => 'Senior Developer',
                'salary' => '$100,000'
            ]
        ];

    $job = Arr::first($jobs, fn($job) => $job['id'] == $id);
    return view('job', ['job' => $job]);
});
