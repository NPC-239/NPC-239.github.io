<?php

use App\Models\JobListing;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/jobs', function () {
    return view('jobs', [ 'jobs' => JobListing::all() ]);
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/jobs/{id}', function ($id) {

    //dd($id);

    //$job = Arr::first(\App\Models\JobListing::all(), fn($job) => $job['id'] == $id);
    $job = JobListing::find($id);
    return view('job', ['job' => $job]);
});

//// Example 1
//$jobs =[
//    [
//        'id' => 1,
//        'title' => 'Intermediate Developer',
//        'salary' => '$70,000'
//    ],
//    [
//        'id' => 2,
//        'title' => 'Junior Developer',
//        'salary' => '$50,000'
//    ],
//    [
//        'id' => 3,
//        'title' => 'Senior Developer',
//        'salary' => '$100,000'
//    ]
//];

// Example 2
//class Job {
//
//    public static function all(): array
//    {
//
//        return [
//            [
//                'id' => 1,
//                'title' => 'Intermediate Developer',
//                'salary' => '$70,000'
//            ],
//            [
//                'id' => 2,
//                'title' => 'Junior Developer',
//                'salary' => '$50,000'
//            ],
//            [
//                'id' => 3,
//                'title' => 'Senior Developer',
//                'salary' => '$100,000'
//            ]
//        ];
//
//    }
//
//}
