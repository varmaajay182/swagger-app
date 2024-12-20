<?php

use App\Http\Controllers\loginController;
use App\Http\Controllers\postController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/register',[loginController::class,'register']);
Route::post('/login',[loginController::class,'login']);

//post
Route::group(['middleware' => ['jwt.verify']], function () {

    Route::post('/storePost',[postController::class,'storePost']);
    Route::post('/storeProduct',[postController::class,'storeProduct']);
    Route::post('/storeComment',[postController::class,'storeComment']);
    Route::get('getAllPost',[postController::class,'getPost']);
    Route::get('getAllProduct',[postController::class,'getAllProduct']);
});
