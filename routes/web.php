<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

// Route::get('/', function () {
//     return inertia('Home');
// });
//Route::inertia('/','Home'); same as above

// Route::get('/',function(){
//     return Inertia::render('Home',['name' => 'Krish']); //with this help of render we can pass name to react component as props
// });
Route::get('/',[PostController::class,'index']);

Route::resource('posts',PostController::class)->except('index');

 Route::get('/about',function(){
    return inertia('About/About');
 });



